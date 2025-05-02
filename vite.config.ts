import { defineConfig } from 'vite'
import { createVitePlugins } from './build/vite'
import { createViteBuild } from './build/vite/build'
// https://vite.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  build: createViteBuild(),
})
