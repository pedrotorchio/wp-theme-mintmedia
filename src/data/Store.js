import Fetcher from './DataFetcher';
import Manual from './ManualData';
import Embeded from './EmbededData';

export class Store {
    constructor(manualData = {}, embededObject = {}, fetchBaseUrl = "") {
        this.manual = new Manual(manualData);
        this.fetcher = new Fetcher(fetchBaseUrl);
        this.Embeded = new Embeded(embededObject);
    }
    async get(namespace, file) {
        return this.manual.get(namespace,file);
    }
}