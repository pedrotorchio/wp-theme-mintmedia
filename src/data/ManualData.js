export default class ManualData {
    constructor(data) {
        this.data = data;
    }

    get(namespace, item) {
        let data = this.data && this.data[namespace];
        if (data && item)
            data = data[item];

        return data || null
    }
}