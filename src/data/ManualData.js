
export default class ManualData {
    async get(namespace, item) {

        let data = (await import(`@/data/manual-database/${namespace}`)).default;
            
        if (data && item)
            data = data[item];

        return data || null
    }
}