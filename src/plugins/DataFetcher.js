
import DataFetcher from '@/data/DataFetcher'
export default {
    install(Vue, options) {
        Vue.prototype.$info = new DataFetcher();
    }
}