import {resolve} from 'path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './build/vite'
import { createViteBuild } from './build/vite/build'
// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd()

// 路径查找
function pathResolve(dir: string) {
    return resolve(root, '.', dir)
}
// https://vite.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  build: createViteBuild(),
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
    alias: [
        {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        // @/开头的路径别名
        {
            find: /\@\//,
            replacement: `${pathResolve('src')}/`
        }
    ]
  },
})
