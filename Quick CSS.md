## main.css

### Element Position
- position-R 右对齐标题，无颜色设置
- position-C 居中对齐标题，无颜色设置 !:图片居中须使用< div >标签包裹!
- position-L 左对齐标题，无颜色设置


### 标题边框 !:图片加边框不需要< div >标签包裹!
- normal-box-title 普通边框，仅圆角黑框线
- fill-box-true-title 填充边框，颜色默认橙色(圆角)
- fill-box-flase-title 填充边框，颜色默认橙色(非圆角) !:对图片似乎没有用~
- official-box-title 官方边框，仅直角黑框线


### 图片
- official-box-image 1:1图片
- circle-angle-16 圆角 16px
- circle-angle-100 圆角 100%


### 侧边栏
- content-box 侧边栏大框架
- content-box-photo 侧边栏头图位置设定
代码结构如下：
```html
<div class="content-box">
    <img src="./*.png" alt="" class="content-box-photo">
</div>
```


### 侧边栏目录
- box-item 侧边栏（ul标签添加！）
```html
<ul class="box-item">
    <li></li>
</ul>
```


### 简介模块<含圆角> *均未指定颜色*
- item-intro-all 宽度为全屏，高度为auto
- item-intro-right-all 搭配侧边栏使用，占用右侧空间，高度为auto
- item-intro-third 三竖栏排布方式，代码结构如下：
```html
<div style="background-color: ###;" class="item-intro-third">
    <div id="item-1"></div>
    <div id="item-2"></div>
    <div id="item-3"></div>
</div>
```


### 模块内设计
- item-title 需搭配h标签使用，并且自动定位，需使标题位于简介模块div内！
- item-intro-title 简介小module标题，与item-title的位置有差异！此class仅作约束使用
- item-intro 简介内的简介内容，建议使用p标签
- li-item 与box-item相同，但无margin属性