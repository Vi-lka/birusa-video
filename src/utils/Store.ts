import { create } from "zustand";

export const useStore = create<StoreType>((set) => ({
    play: false,
    setPlay: (value: boolean) => set(() => ({ play: value })),
    playFromStart: false,
    setPlayFromStart: (value: boolean) => set(() => ({ playFromStart: value })),
    // 
    currentPerson: 0,
    setCurrentPerson: (person: number) => set(() => ({ currentPerson: person })),
    currentVideo: 0,
    setCurrentVideo: (video: number) => set(() => ({ currentVideo: video })),
    // 
    ended: false,
    setEnded: (value: boolean) => set(() => ({ ended: value })),
    loading: true, 
    setLoading: (value: boolean) => set(() => ({ loading: value })),
    // 
    currentMenu: undefined,
    setCurrentMenu: (menu: number | undefined) => set(() => ({ currentMenu: menu })),
    // 
    currentMap: undefined,
    setCurrentMap: (map: number | undefined) => set(() => ({ currentMap: map })),
}))