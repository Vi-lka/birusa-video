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
    currentVideo: number,
    currentPerson: number,
}