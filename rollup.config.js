import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
// import typescript from '@rollup/plugin-typescript';
const extensions = ['.ts', '.vue', '.js'];

export default {
    input: 'src/components/Add/index.ts',
    output: {
        file: 'esm/AddComponent.js',
        format: 'esm'
    },
    plugins: [
        nodeResolve({
            extensions
        }),
        commonjs(),
        vuePlugin({
            id: 'AppComponent'
        }),
        babel({
            babelHelpers: 'bundled',
            extensions
        }),
    ],
    external: ['vue']
};
