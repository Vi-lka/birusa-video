import { CONTENT } from "./content";

export default function getStaticPaths() {
    const StaticPaths: StaticPathType[] = []
    
    CONTENT.forEach(element => {
        const arrayOfUrls = element.url.split('/');
        let objectPath = { slug: arrayOfUrls.slice(0, -1) }
        StaticPaths.push(objectPath)
    })


    return StaticPaths
}
