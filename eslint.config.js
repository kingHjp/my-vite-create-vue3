import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
  eslintPluginPrettier
])
