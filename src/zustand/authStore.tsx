import { create } from "zustand";
import { AccountData } from "@models/accountData";

interface AuthStoreState {
    userdata: AccountData | null;
    setUserData: (data: AccountData) => void;
    clearUserData: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
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

export default useAuthStore;
