type ContentType = {
    id: number
    name: string,
    url: string,
    buttons: {
        name: string,
        url: string
    }[]
}

type StaticPathType = {
    slug: string[]
}