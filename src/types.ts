import { App } from 'vue';

export type SFCWithInstall<T> = T & {install(app: App): void;}

export interface Install {
    install(app: App): void;
}
