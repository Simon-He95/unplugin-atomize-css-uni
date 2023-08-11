const tailwindMap: Record<string, string> = {
  '[': '__brackets__',
  ']': '__brackets__',
  '!': '__important__',
  ':': '__colon__',
  '%': '__percent__',
  '#': '__idSelector__',
}
// 兼容微信小程序不支持!、\/[^\/]*\/
export function vitePluginTailwindUni() {
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
      else if (id.endsWith('styles/index.css')) {
        return Object.keys(tailwindMap).reduce((result, key) => {
          const value = tailwindMap[key]
          return result.replaceAll(`\\${key}`, value)
        }, code)
      }
      return code
    },

  }
}
