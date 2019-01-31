export class MenuItem {
    constructor (title, to) {
        this.title = title        
        this.to = to
    }
}
export class SocialItem {
    constructor(title, slug, url) {
        this.title = title
        this.slug = slug
        this.url = url
    }
}

export default {
    main: [
        new MenuItem('Home', '/')
    ],
    social: [
        new SocialItem('Facebook', 'facebook', '#'),
        new SocialItem('Twitter', 'twitter', '#'),
        new SocialItem('Instagram', 'instagram', '#'),
        new SocialItem('Pinterest', 'pinterest', '#')
    ]
}
