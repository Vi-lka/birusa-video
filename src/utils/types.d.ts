type ContentType = {
    id: number
    name: string,
    filename: string,
    buttons: {
        name: string,
        indexUrl: number
    }[]
}

type Globals = {
    click: boolean,
}

interface StoreType {
    play: boolean;
    setPlay: (value: boolean) => void;
    playFromStart: boolean;
    setPlayFromStart: (value: boolean) => void;
    // 
    currentPerson: number;
    setCurrentPerson: (person: number) => void;
    currentVideo: number;
    setCurrentVideo: (video: number) => void;
    // 
    ended: boolean;
    setEnded: (value: boolean) => void;
    loading: boolean; 
    setLoading: (value: boolean) => void;
    // 
    currentMenu: number | undefined,
    setCurrentMenu: (menu: number | undefined) => void
    // 
    currentMap: number | undefined,
    setCurrentMap: (map: number | undefined) => void
}