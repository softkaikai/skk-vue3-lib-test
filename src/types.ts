import { App, DefineComponent } from 'vue';

export type vueComponentType = DefineComponent<{}, {}, any>;
export function SFCWithInstall(component: vueComponentType): {install(app: App): void}  {
    return {
        install(app: App) {
            app.component(component.name, component);
        }
    }
}
