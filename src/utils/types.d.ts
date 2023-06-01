type ContentType = {
    id: number
    name: string,
    filename: string,
    buttons: {
        name: string,
        indexUrl: number
    }[]
}

type StaticPathType = {
    slug: string[]
}