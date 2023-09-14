import {create  } from 'zustand';
import { persist } from 'zustand/middleware'

export const useUserStore = create(persist(
    (set) => ({
        userAuth: [],
        setUserAuth: (userAuth) => set({userAuth}),
        logout: () => set({userAuth: null}),
        jwt: null,
        setJwt: (jwt) => set({jwt}),
        removeJwt: () => set({jwt: null}),
    }),
    {
        name: 'user-auth-storage',
    }
)
)