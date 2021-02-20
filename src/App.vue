<template>
 <div>
  <div class="red">sdfsdf</div>
  <div class="red">{{name}}</div>
  <add-component name="kaikai"></add-component>
  <van-button type="primary" block>块级元素</van-button>
  <hello-world></hello-world>
  <el-row>
   <el-button>默认按钮</el-button>
   <el-button type="default">主要按钮</el-button>
   <el-button type="success">成功按钮</el-button>
   <el-button type="info">信息按钮</el-button>
   <el-button type="warning">警告按钮</el-button>
   <el-button type="danger">危险按钮</el-button>
  </el-row>
 </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    // import AddComponent from './components/Add/Add.vue';
    // import AddComponent from '../lib/es/Add'
    import AddComponent from '../esm/AddComponent';
    import HelloWorld from './components/HelloWorld/HelloWorld.vue';
    import { ElButton, ElRow } from 'element-plus';


    export default defineComponent({
        name: 'AppComponent',
        components: {HelloWorld, AddComponent, ElButton, ElRow},
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
