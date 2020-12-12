import type { UserConfig } from 'vite'
import createVueDocPlugin from 'vite-plugin-vuedoc'
import vitePluginSyncmd from './scripts/vitePluginSyncmd'

const config: UserConfig = {
  assetsDir: 'src/assets',
  optimizeDeps: {
    link: ['elenext', '@elenext/icons']
    // link: ['optimize-linked']
  },
  alias: {},
  plugins: [
    vitePluginSyncmd(),
    createVueDocPlugin({
      prism: {
        theme: 'tomorrow'
      }
    })
  ]
}

export default config
