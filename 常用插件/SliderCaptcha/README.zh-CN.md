## 滑块式验证码

<a href="README.md">English</a> | <span>中文</span>

---

用户通过拖动滑块行为来完成校验，支持PC端及移动端。可以将用户拖动行为的时间、精度，滑动轨迹等信息到服务器，然后进行后台算法验证。

## 在线演示
单页面演示：http://longbowenterprise.gitee.io/slidercaptcha/  
项目内演示：http://argo.zylweb.cn/ (本项目为开源后台管理框架 [[BootstrapAdmin](https://gitee.com/LongbowEnterprise/BootstrapAdmin)])  
**输入三次错误密码后第四次出现滑块式行为验证码**  

## 效果图
![输入图片说明](https://images.gitee.com/uploads/images/2019/0316/003740_c5175e6b_554725.png "SliderCaptcha.png")
![输入图片说明](https://gitee.com/uploads/images/2019/0410/124955_f9b6d54c_554725.png "Untitled.png")

## 快速开始

### 组件依赖 jQuery bootstrap font-awesome

### CSS

```html
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link href="https://cdn.bootcss.com/font-awesome/5.7.2/css/all.min.css">
<link href="./src/slidercaptcha.css">
```
将引入样式表的 &lt;link&gt; 标签复制并粘贴到 &lt;head&gt; 中，并放在所有其他样式表之前。

### JS

```html
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="./src/longbow.slidercaptcha.js"></script>
```

将引入脚本的 &lt;script&gt; 标签复制并粘贴到 &lt;body&gt; 最后面。

## 用法

添加网页Html元素

```html
<div id="captcha"></div>
```

## API

### 通过 javascript 初始化控件

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha();
</script>   
```

### Options

可以根据自己需要设置宽度与高度等配置

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha({
        width: 280,
        height: 150,
        sliderL: 42,
        sliderR: 9,
        offset: 5,
        loadingText: '正在加载中...',
        failedText: '再试一次',
        barText: '向右滑动填充拼图',
        repeatIcon: 'fa fa-redo'
        setSrc: function () {
            
        },
        onSuccess: function () {
            
        },
        onFail: function () {

        },
        onRefresh: function () {
        
        }
    });
</script>   
```

名称 | 类型 | 默认值 | 说明 |
---|---|---|---
width | integer | 280 | 背景图片宽度
height | integer | 150 | 背景图标高度
sliderL | integer | 42 | 拼图宽度
sliderR | integer | 9 | 拼图突出半径
offset | integer | 5 | 验证容错偏差值 默认5个像素偏差即认为验证通过
loadingText | string | "正在加载中..." | 图片加载时显示的文本信息
failedText | string | "再试一次" | 验证失败时显示的文本信息
barText | integer | "向右滑动填充拼图" | 拖动滑块准备拖动时显示的文本信息
repeatIcon | string | "fa fa-redo" | 重新加载图标 需引用 font-awesome
setSrc | function | "https://picsum.photos/?image=random" | 设置图片加载路径
onSuccess | function | *null* | 验证通过时回调此函数
onFail | function | *null* | 验证失败时回调此函数
onRefresh | function | *null* | 点击重新加载图标时回调此函数
localImages | function | function () { return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg'; } | 图床图片加载失败时调用此方法返回本地图片路径

### 方法

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha();
    $('#captcha').sliderCaptcha('reset');
</script>   
```

Method | Example | Description
---|---|---
reset | $('#captcha').sliderCaptcha('reset') | 重置控件

## 事件
无

## Issue
请前往 [Issue](../../issues) 页面添加问题

## 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request