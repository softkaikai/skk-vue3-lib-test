<template>
    <div>
        <div class="red" @click="jian">---</div>
        <div>{{num}}</div>
        <div class="red" @click="add">+++</div>
        <address-component></address-component>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import AddressComponent from '../Address/Address.vue';

    export default defineComponent({
        name: 'AddComponent',
        components: {AddressComponent},
        data() {
            return {
                num: 1
            }
        },
        mounted() {
        },
        methods: {
            add() {
                this.num++;
            },
            jian() {
                this.num--;
            }
        }
    })
</script>

<style scoped>

</style>
