import AddComponent from './Add.vue';
import { App } from 'vue';
import { SFCWithInstall, Install } from 'src/types';

AddComponent.install = (app: App): void => {
    app.component(AddComponent.name, AddComponent)
}
// const _component: SFCWithInstall<typeof AddComponent> = AddComponent;

export default AddComponent;

