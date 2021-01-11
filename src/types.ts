import { App, DefineComponent } from 'vue';

export declare type vueComponentType = DefineComponent<{}, {}, any> ;
export function SFCWithInstall(component: vueComponentType) {
    return Object.assign(component,
        {
            install(app: App) {
                app.component(component.name, component);
            }
        })
}
