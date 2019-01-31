import Manual from './ManualData';

export default class DataFetcher {
    constructor() {
        this.manual = new Manual();
    }
    async get(namespace, file) {
        return this.manual.get(namespace,file);
    }
}