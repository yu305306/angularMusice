# Music

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

运行 ng serve

打包 ng build --prod --aot

此demo 是仿照2019-04-01网易云PC网页的播放，只制作部分功能，跑了播放功能 和 歌词滚动。
音频是扒 douban.fm 的，歌词部分是扒网易云的。
做了2个小页面练手。
点击头部小按钮 歌单是返回 index 的列表页
点击列表的图片跳去歌单列表显示页


dist 目录是在本地服务器才能正常打开。 使用router 跳转
本地服务器 使用 全局服务器  anywhere  插件。 npm install anywhere -g

$ anywhere
// or with port
$ anywhere -p 8000
// or start it but silent(don't open browser)
$ anywhere -s
// or with hostname
$ anywhere -h localhost -p 8888
// or with folder
$ anywhere -d ~/git/anywhere
// or enable html5 history
$ anywhere -f /index.html



