import { App, defineComponent } from 'vue';

export type vueComponentType = ReturnType<typeof defineComponent>;
export function SFCWithInstall(component: vueComponentType): {install(app: App): void}  {
    return {
        install(app: App) {
            app.component(component.name, component);
        }
    }
}
