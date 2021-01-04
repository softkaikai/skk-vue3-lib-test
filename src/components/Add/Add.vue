<template>
    <div>
        <div class="red" @click="jian">---</div>
        <div>{{num}}</div>
        <div class="red" @click="add">+++</div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AddComponent',
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
