<script>
export default {
    data: () => ({
        services: []
    }),
    created() {
        this.$info.get('services', 'cards')
            .then(c=>this.services = c)
    }
}
</script>

<template lang="pug">
    section
        .limited-width
            
</template>
