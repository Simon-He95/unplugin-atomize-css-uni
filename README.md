## vite-plugin-tailwind-uni
此插件为了解决uniapp中使用tailwindcss，遇到tailwindcss语法编译到微信小程序wxss，不支持`\[`、`\]`、`#`、`:`、`%`的问题,会将这些不能被wxss识别的class🥱转换成以下的形式

## Options
可以传入Options去覆盖原本的class名，或增加新的不能被识别需要被转换的符号

## 使用
```typescript
import { vitePluginTailwindUni } from 'vite-plugin-tailwind-uni'
plugins:[
  vitePluginTailwindUni(options)
]
```

```typescript
const tailwindMap: Record<string, string> = {
  '[': '__brackets__',
  ']': '__brackets__',
  '!': '__important__',
  ':': '__colon__',
  '%': '__percent__',
  '#': '__idSelector__',
}
```

## License
[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
