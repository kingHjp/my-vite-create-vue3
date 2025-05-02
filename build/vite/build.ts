export function createViteBuild() {
  return {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js', // 入口文件输出配置
        chunkFileNames: 'assets/js/[name]-[hash].js', // 代码分割文件输出配置
        /* 
          assetFileNames: 用于配置静态资源的输出文件名该选项的值是一个匹配模式，用于自定义构建结果中的静态资源名称，或者值为一个函数，
          对每个资源调用以返回匹配模式。这种模式支持以下的占位符：
        */
        assetFileNames: (assetInfo: any) => {
          console.log('assetInfo', assetInfo)
          const extType = assetInfo.name?.split('.').at(-1)
          if (extType === 'css') {
            return 'assets/css/[name]-[hash][extname]' // css 文件输出配置
          } else if (extType === 'woff' || extType === 'woff2') {
            return 'assets/fonts/[name]-[hash][extname]' // 字体文件输出配置
          } else if (['jpeg', 'jpg', 'png', 'svg', 'gif'].includes(extType)) {
            return 'assets/images/[name]-[hash][extname]' // 图片文件输出配置
          } else {
            return 'assets/[name]-[hash][extname]' // 其他文件输出配置
          }
        }
      }
    }
  }
}
