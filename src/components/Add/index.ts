import AddComponent from './Add.vue';
import { SFCWithInstall } from '../../types';

export default SFCWithInstall(AddComponent);
/*export default {
    install(app: App) {
        app.component(AddComponent.name, AddComponent);
    }
}*/
