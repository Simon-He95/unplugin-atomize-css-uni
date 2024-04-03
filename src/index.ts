import { createUnplugin } from 'unplugin'

// 兼容微信小程序不支持!、\/[^\/]*\/
export const unplugin = createUnplugin((options: Record<string, string> = {}) => {
  const tailwindMap: Record<string, string> = Object.assign({
    '[': '__brackets__',
    ']': '__brackets__',
    '!': '__important__',
    ':': '__colon__',
    '%': '__percent__',
    '#': '__idSelector__',
  }, options)
  return {
    name: 'vite-plugin-tailwind-uni',
    enforce: 'pre',
    transform(code: string, id: string) {
      if (id.endsWith('.vue')) {
        return code.replace(/class="([^"]*)"/g, (_: string, match: string) => {
          const data = Object.keys(tailwindMap).reduce((result, key) => {
            const value = tailwindMap[key]
            return result.replaceAll(key, value)
          }, match)
          return `class="${data}"`
        })
      }
      else if (id.endsWith('.css')) {
        return Object.keys(tailwindMap).reduce((result, key) => {
          const value = tailwindMap[key]
          return result.replaceAll(`\\${key}`, value)
        }, code)
      }
      return code
    },

  }
})

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
export const rspackPlugin = unplugin.rspack
export const esbuildPlugin = unplugin.esbuild
