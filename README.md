# bmaa.tw

## Get Started

1. 先看`package.json`的`script`

   ```
   "scripts": {
      "dev": "astro dev",
      "build": "astro build"
   },
   ```

   把東西跑起來的指令都在這邊, 對應到 `npm run xx`

   `dev`是開發用的指令，網頁來說就是升起一個會hot reload的網站，可以邊改程式邊看結果不用刷新
   `build`就是最後把網站輸出的指令，一般都會把結果寫到`dist/`

2. `npm run dev` 升起來改看看，例如把`src/components/Header.astro`的"近期課程"改掉，或多加一個欄位，觀察網站變化。

3. 基本上最後這些資料都會被轉換成對應的components, 幾乎都是用[Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)，可以參照Header.astro下面

## astro

基本上是把東西組再一起編成靜態網站用的(Static Site Generation, SSG)

1. 網站路徑處理：
   `src/pages/[...slug].astro` 會去看`src/pages`下面所有的index.tsx，產生對應的網站路徑，例如class-information/index.tsx就會被對應到`/class-information`。.mdx則是astro本身會自動處理，例如evidence/1.mdx就對應到`/evidence/1`

2. 生成網頁完整html：
   react (.tsx)本身只處理到components，但一個網頁需要有`<html>`, `<head>`, `<body>`等，`src/layouts/Layout.astro`就用模板的方式除理，他也會把像.map這種固定的東西先展開成html。

3. 優化網站載入：
   像是 Header.astro 就沒有用.tsx，主要是剛好只有那邊會需要傳一包react給瀏覽器(原本手機板的目錄有用useState)，但其實簡單幾行`<script>`就能解決（最下面），這樣載入就會比較快。

   之後如果有要用到很多像useState, useEffect 等的react基本上這邊也就不用省了。但要記得在`src/pages/[...slug].astro`把`<Page />`改成`<Page client:load />`，這樣才會拉react到瀏覽器。 https://docs.astro.build/en/reference/directives-reference/

## TailwindCSS

基本上就是可以比較簡短的寫CSS用的，像`w-full`對應到`width: 100%`之類的，反正主要是AI來寫，最後微調就需要什麼查什麼就對了。

## 上線

主要是靠github Page，可以參考`.github/workflows/deploy.yml`和`https://github.com/bmaa-tw/bmaa-tw.github.io/actions`
