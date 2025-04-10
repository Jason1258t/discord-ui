import {ChatStoreState} from "./chatStoreState";
import {SliceCreator} from "@utils/storeSlice";
import React from "react";

export interface AttachmentsSlice {
    attachments: RawAttachment[];
    addAttachments: (files: File[]) => void;
    onPaste: (e: React.ClipboardEvent) => void;
    convertAttachments: () => void;
    removeAttachment: (ind: number) => void;
    clearAttachments: () => void;
}

export interface RawAttachment {
    tempSrc: string;
    file: File;
}

export const createAttachmentsSlice: SliceCreator<
    AttachmentsSlice,
    ChatStoreState
> = (set, get) => {
    const extractRawAttachments = (
        imageItems: DataTransferItem[]
    ): RawAttachment[] => {
        const attachments: RawAttachment[] = [];
        imageItems.forEach((item) => {
            const file = item.getAsFile();
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                attachments.push({tempSrc: imageUrl, file: file});
            }
        });
        return attachments;
    };

    return {
        attachments: [],
        addAttachments: (files) => {
            const attachments: RawAttachment[] = files.map((e) => {
                return {tempSrc: URL.createObjectURL(e), file: e};
            });
            set((state) => ({
                attachments: [...state.attachments, ...attachments],
            }));
        },
        onPaste: (e) => {
            if (!e.clipboardData?.items) return;

            const items = Array.from(e.clipboardData.items);
            const imageItems = items.filter((item) =>
                item.type.includes("image")
            );
            const attachments = extractRawAttachments(imageItems);
            set((state) => ({
                attachments: [...state.attachments, ...attachments],
            }));
        },
        convertAttachments: () => {
        },
        removeAttachment: (ind) => {
            const attachments = get().attachments;
            attachments.splice(ind, 1);
            set({attachments: attachments});
        },
        clearAttachments: () => {
            set({attachments: []});
        },
    };
};
