<template>
 <div>
  <div class="red">sdfsdf</div>
  <div class="red">{{name}}</div>
 </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import AddComponent from '@components/Add/index';


    export default defineComponent({
        name: 'AppComponent',
        data() {
            return {
                name: 'kaikai'
            }
        },
        mounted() {
            console.log(1111);
        }
    })
</script>

<style scoped>
    .red {
        color: red;
    }
</style>
