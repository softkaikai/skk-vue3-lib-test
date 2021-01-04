import AddComponent from './Add.vue';
import { SFCWithInstall } from '../../types';
import {App} from "vue";

// export default SFCWithInstall(AddComponent);
export default {
    install(app: App) {
        app.component(AddComponent.name, AddComponent);
    }
}
