// import { vueComponentType } from './types'

/*declare module '*.vue' {
    import { App, defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
    const component: vueComponentType
    export default component
}*/


declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

