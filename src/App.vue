<template>
 <div>
  <div class="red">sdfsdf</div>
  <div class="red">{{name}}</div>
  <add-component></add-component>
  <van-button type="primary" block>块级元素</van-button>
  <hello-world></hello-world>
 </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    // import AddComponent from './components/Add/Add.vue';
    // import AddComponent from '../lib/es/Add'
    import HelloWorld from './components/HelloWorld/HelloWorld.vue';


    export default defineComponent({
        name: 'AppComponent',
        components: {HelloWorld},
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
