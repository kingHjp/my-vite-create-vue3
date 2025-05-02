import { defineConfig } from 'vite'
import {createVitePlugins} from './build/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
})
