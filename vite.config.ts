import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import eslintPlugin from 'vite-plugin-eslint'

function resolve (dir: string) {
  return path.join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vueSetupExtend(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // you need to set i18n resource including paths !
      include: resolve('./src/i18n/**')
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver()
      ],
      dirs: [
        // './composables'
      ],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      extensions: ['vue', 'tsx'],
      resolvers: [
        ElementPlusResolver()
      ],
      dts: resolve('./components.d.ts')
    }),
    vue(),
    eslintPlugin({
      fix: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }
})
