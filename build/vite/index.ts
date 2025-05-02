// import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
// @ts-ignore
import AutoImport from 'unplugin-auto-import/vite' // 自动为 Vite、Webpack、Rollup 和 esbuild 按需自动导入 API
import Components from 'unplugin-vue-components/vite' // Vue 的按需组件自动导入
import viteCompression from 'vite-plugin-compression'

export function createVitePlugins() {
  // const root = process.cwd()

  // 路径查找
  // function pathResolve(dir: string) {
  //   return resolve(root, '.', dir)
  // }

  return [
    Vue(),
    // VueJsx(),
    // UnoCSS(),
    // progress(),
    // PurgeIcons(),
    // ElementPlus({}),
    AutoImport({
      // 自动导入的文件类型
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // 指定自动导入的库
      imports: [
        'vue',
        'vue-router'
        // 可额外添加需要 autoImport 的组件
        // {
        // }
      ],
      // 生成自动导入的声明文件路径
      dts: 'src/types/auto-imports.d.ts',
      // 自定义解析器
      resolvers: [],
      //  配置 ESLint 插件，这里禁用了自动导入的 ESLint 插件
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      // 生成自定义 `auto-components.d.ts` 全局声明
      dts: 'src/types/auto-components.d.ts',
      // 自定义组件的解析器
      resolvers: [],
      //  指定需要自动注册的组件文件路径
      globs: ['src/components/**/**.{vue, md}', '!src/components/DiyEditor/components/mobile/**']
    }),
    // 构建过程中自动压缩生成的文件
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于 threshold 才会被压缩,单位 b
      algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: false //压缩后是否删除源文件
    })
  ]
}
