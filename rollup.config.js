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
        // A Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules
        nodeResolve({
            extensions
        }),
        // A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
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
