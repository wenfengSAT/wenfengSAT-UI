## Slider Captcha

<span>English</span> | <a href="README.zh-CN.md">中文</a>

---

The user completes the verification by dragging the slider to support the PC and mobile terminals. The time, accuracy and sliding trajectory information of user dragging behavior can be sent to the server, and then the background algorithm verification can be carried out.

## Online Demonstration
Single page presentation: http://longbowenterprise.gitee.io/slidercaptcha/  
In-Project Demonstration: https://argo.zylweb.cn/ (Open source Admin Control Pannel [[BootstrapAdmin](https://github.com/ArgoZhang/BootstrapAdmin)])  
**Slide captcha appears for the fourth time after three times of incorrect password input**  

## Screenshot
![输入图片说明](https://images.gitee.com/uploads/images/2019/0316/003740_c5175e6b_554725.png "SliderCaptcha.png")
![输入图片说明](https://gitee.com/uploads/images/2019/0410/124955_f9b6d54c_554725.png "Untitled.png")

## Quick Start

### Dependencies 
jQuery bootstrap font-awesome

### CSS

```html
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
<link href="https://cdn.bootcss.com/font-awesome/5.7.2/css/all.min.css">
<link href="./src/slidercaptcha.css">
```
Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

### JS

```html
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="./src/longbow.slidercaptcha.js"></script>
```

Place the following `<script>`s near the end of your pages, right before the closing `</body>` tag, to enable them. 

## Usage

```html
<div id="captcha"></div>
```

## API

### JavaScript behavior

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha();
</script>   
```

### Options

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha({
        width: 280,
        height: 150,
        sliderL: 42,
        sliderR: 9,
        offset: 5,
        loadingText: 'Loading...',
        failedText: 'Try again',
        barText: 'Slide right to fill',
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

Name | Type | Default | Description |
---|---|---|---
width | integer | 280 | Background picture width
height | integer | 150 | Background picture height
sliderL | integer | 42 | Puzzle Width
sliderR | integer | 9 | Puzzle Outburst Radius
offset | integer | 5 | Validation of error tolerance deviation. default 5px
loadingText | string | "Loading..." | Text information displayed when images are loaded
failedText | string | "Try again" | Text information displayed when validation fails
barText | integer | "Slide right to fill" | Text information displayed when dragging the slider to prepare for dragging
repeatIcon | string | "fa fa-redo" | Reload icons. dependent on `font-awesome`
setSrc | function | "https://picsum.photos/?image=random" | Setting the Picture Loading Path
onSuccess | function | *null* | Callback this function when validation passes
onFail | function | *null* | Callback this function when validation fails
onRefresh | function | *null* | Callback this function when click on the reload icon
localImages | function | function () { return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg'; } | Call this function when the image loading fails

### Methods

```html
<div id="captcha"></div>
<script>
    $('#captcha').sliderCaptcha();
    $('#captcha').sliderCaptcha('reset');
</script>   
```

Method | Example | Description
---|---|---
reset | $('#captcha').sliderCaptcha('reset') | reset

## Events

None

## Issue
Please go to [Issue](../../issues) page to create issue

## Contribution

1. Fork this project
2. Create new Feat_xxx branch
3. Commit 
4. Create Pull Request