---
title: Mock
---

# Mock

在开发阶段支持使用 Mock 来模拟接口的响应数据。
使用 Mock 只需要为接口编写 Mock 文件即可，在环境变量 `VITE_API_MOCK` 为 `true` 时将自动生效。
接口的 Mock 文件编写在 `mock/modules` 目录下，文件名需要以 `.mock.js` 结尾，推荐以模块划分。

> 框架中已经内置了 `mockjs` 插件。

## 编写

一个 Mock 文件内可以同时编写多个接口的 Mock，Mock的格式：

```js
// mock/modules/*.mock.js

// Mock的Key即是接口的地址，与定义api时一致
exports['/login'] = {
  method: 'GET', // 接口的请求方式
  content: () => null, // 一个函数，返回接口的响应数据，支持 Promise
};

// 异常响应示例
exports['/login'] = {
  method: 'GET',
  content: () => {
    const err = new Error('异常信息');
    // 可以指定状态码
    err.code = -1;
    throw err;
  },
};
```

## 配置

使用 Mock 需要配置项目接口的响应数据结构、成功/异常状态码等信息。
配置文件在 `mock/config.js`：

```js
// mock/config.js

// 成功响应的状态
export const codeOK = '0';
// 异常响应的默认状态码
export const codeFail = '-1';

// 转化响应数据的结构，将 code、data、msg 组合成接口响应数据的实际结构
export const responseTransfer = ({ code, data, msg }) => ({
  msg,
  code,
  data,
});
```
