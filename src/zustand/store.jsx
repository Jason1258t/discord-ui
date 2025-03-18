import { create } from "zustand";

const useStore = create((set) => ({ 
    userdata: [
        //email, 
        //password, 
        //displayName, 
        //username 
    ],
    setUserData: (data) => {
        set((state) => ({
            userdata: [
                {
                    email: data.email,
                    password: data.password,
                    displayName: data.displayName,
                    username: data.username
                }
            ]
        }))
    },
    clearUserData: () => {
        set((state) => ({
            userdata: [

            ]
        }))
    },
}))

export default useStore;