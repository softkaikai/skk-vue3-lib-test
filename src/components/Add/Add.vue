<template>
    <div>
        <div class="red" @click="jian">---</div>
        <div class="c-red">{{num}} + {{name}}</div>
        <div class="red" @click="add">+++</div>
<!--        <address-component></address-component>-->
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    // import AddressComponent from '../Address/Address.vue';

    export default defineComponent({
        name: 'AddComponent',
        props: {
            name: {
                type: String,
                required: true
            }
        },
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
    .c-red {
        color: red;
    }
</style>
