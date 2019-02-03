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
    social: {
        'facebook': new SocialItem('Facebook', 'facebook', '#'),
        'twitter': new SocialItem('Twitter', 'twitter', '#'),
        'instagram': new SocialItem('Instagram', 'instagram', '#'),
        'pinterest': new SocialItem('Pinterest', 'pinterest', '#'),
        'vimeo': new SocialItem('Vimeo', 'vimeo', 'https://vimeo.com/mintmediadesign')
    }
}
