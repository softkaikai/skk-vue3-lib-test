<template>
    <div>
        {{address}}
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AddressComponent',
        data() {
            return {
                address: '四川 - 成都'
            }
        },
        mounted() {
        },
        methods: {
        }
    })
</script>

<style scoped>

</style>
