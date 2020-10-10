export class Post {
    public number: string
    public type: any
    public image: string

    get imageSrc(): string {
        return `assets/img/${ this.image }`
    }
}
