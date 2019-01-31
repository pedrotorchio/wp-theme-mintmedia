export class MenuItem {
    constructor (title, to) {
        this.title = title
        this.to = to
    }
}

export default {
    main: [
        new MenuItem('Home', '/')
    ]
}
