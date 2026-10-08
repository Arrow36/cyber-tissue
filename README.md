# 赛博抽纸 / Cyber Tissue

一个纯前端的互动抽纸网页。向上滑动抽出纸巾，看它飘落、碰到纸盒或桌面，并在边缘自然下垂。

## 玩法

- 在画面上向上滑动并松手抽纸；左右移动会影响纸巾飞出的方向。
- 桌面端也可以用鼠标拖动，或按空格键、↑ 键抽纸。
- 右上角切换音效，右下角清理散落的纸巾。
- 累计抽纸数会显示在顶部；刷新页面后重新开始。

## 本地运行

直接打开 `dist/index.html`，或在仓库根目录运行：

```bash
node server.cjs
```

然后访问 `http://127.0.0.1:4173/`。Node.js 只用于本地预览；网页本身不需要后端、构建步骤或第三方依赖。

## 实现

- 使用 Canvas 2D 绘制纸盒、桌面和纸巾。
- 纸巾飞行时沿轻量轨迹飘动；接触纸盒或桌面后，用简化的布面粒子、重力、碰撞和距离约束模拟下垂。
- 按空间深度处理纸巾遮挡，并缓存静止纸巾与场景绘制结果。
- 使用 Pointer Events 兼容触摸和鼠标；短音效以 PCM 数据嵌入脚本，离线播放。

## 文件

```text
dist/
  index.html   页面与样式
  app.js       交互、绘制、物理和音效
server.cjs     可选的本地预览服务器
README.md
```

`dist/` 也是离线静态产物。制作小工具 ZIP 时，应将 `index.html` 和 `app.js` 放在 ZIP 根目录。

## 音效来源

抽纸音效改编自 [Tissue Swipe — ceoux (Freesound)，经 Pixabay 发布](https://pixabay.com/sound-effects/film-special-effects-tissue-swipe-103261/)。本项目使用了裁剪和音量调整后的片段，并将其嵌入 `dist/app.js`。音效受 [Pixabay Content License](https://pixabay.com/service/license-summary/) 约束；它不随代码许可一并授权。
