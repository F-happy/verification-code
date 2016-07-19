# verification-code
> 前端随机生成验证码的小工具, 利用了前端中的 canvas 画布来进行数字的展示。


### 安装：
```
npm install --save-dev verification-code
```

### 开始使用：
```javascript
import verification from 'verification-code';

var result = verification.create();
var vcode = result.code;				// 随机生成的验证码
var imgDataURL = result.dataURL;		// 验证码图片的 base64
```

### 效果：

![](code.png)