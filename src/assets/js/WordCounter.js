export default class WordCounter {
    constructor() {
        this.words = {}
    }
    add(seg) {
        if (!this.words[seg])
            this.words[seg] = 1
        else
            this.words[seg] += 1
    }
    getCount() {
        return this.words
    }
}