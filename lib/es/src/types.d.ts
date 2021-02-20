import { App, DefineComponent } from 'vue';
export declare type vueComponentType = DefineComponent<{}, {}, any>;
export declare function SFCWithInstall(component: vueComponentType): {
    new (...args: any[]): any;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{} & {}>, {}, any, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install(app: App): void;
};
