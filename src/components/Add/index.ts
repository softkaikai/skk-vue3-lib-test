import AddComponent from './Add.vue';
import { App } from 'vue';
import { SFCWithInstall } from '../../types';

const _AddComponent: SFCWithInstall<typeof AddComponent> = Object.assign(AddComponent,
    {
        install(app: App) {
            app.component(AddComponent.name, AddComponent);
        }
    })

export default _AddComponent

// export default SFCWithInstall(AddComponent);
/*export default {
    install(app: App) {
        app.component(AddComponent.name, AddComponent);
    }
}*/
