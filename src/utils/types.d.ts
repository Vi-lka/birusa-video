type ContentType = {
    id: number
    name: string,
    url: string,
    filename: string,
    buttons: {
        name: string,
        url: string,
        indexUrl: number
    }[]
}

type StaticPathType = {
    slug: string[]
}