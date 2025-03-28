import { create } from "zustand";
import { AccountData } from "@models/accountData";

interface StoreState {
    userdata: AccountData | null;
    setUserData: (data: AccountData) => void;
    clearUserData: () => void;
}

const useStore = create<StoreState>((set) => ({
    userdata: null,

    setUserData: (data: AccountData) => {
        set({
            userdata: {
                id: data.id,
                email: data.email,
                password: data.password,
                displayName: data.displayName,
                username: data.username,
            },
        });
    },

    clearUserData: () => {
        set({ userdata: null });
    },
}));

export default useStore;
