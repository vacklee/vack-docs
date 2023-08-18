---
title: 接口
sidebarDepth: 1
---

# 接口

Vack的接口部分基于 [axios](https://www.axios-http.cn/)，为了使用起来更便捷高效，基于 axios 做了更进一层的封装。

## 配置

+ 接口基础路径，通过环境变量 `VITE_API_BASEURL` 来配置
+ 其他可配置项定义在 `src/api/config.js` 中：

```js
// 接口基础路径
export const baseURL = import.meta.env.VITE_API_BASEURL;
// 超时时间，为0则不限制
export const timeout = 0;

// 请求成功状态码
export const codeOK = '0';

// 转换响应数据格式
export const responseTransfer = res => ({
  msg: res?.msg,
  data: res?.data,
  code: res?.code,
});

// 注入请求头
export const injectHeaders = () => ({

});

// 全局API Hooks
export const globalHooks = [];

// 接口定义
export const apiUrls = {

};
```

+ 不同项目接口响应数据的格式基本不同，但一般都有状态码(code)、数据(data)、提示信息(msg)这三个数据。通过 `responseTransfer` 告知 Vack 如何从响应数据中提取这三个信息。

## 定义

在 `apiUrls` 以键值对的形式定义一个接口，如：

```js
export const apiUrls = {
  login: '/login',

  // 支持嵌套定义
  user: {
    getUserInfo: '/getUserInfo',
    // 定义 POST 接口
    updateUserInfo: '<POST>/updateUserInfo'
  },
};
```

+ 键名就是接口的名称，键值是接口的请求地址；
+ 接口声明支持层级嵌套。

## 使用

1. 在需要使用接口的地方引入 api 对象：
```js
import api from '@/api';
```

2. 一般调用：
```js
api.login()
  .then((data) => {})
  .catch((err) => {});
```

+ 接口请求成功时走向 `then` 分支，异常时走向 `catch` 分支；
+ 接口请求仅在正常发送且响应数据的状态码是`codeOK`时视为请求成功；
+ 即使接口请求正常发送，但响应数据的状态码不是`codeOK`，也视为请求异常；
+ `then`分支接收的参数，是响应数据格式中`code` / `data` / `msg`中的`data`部分；
+ `catch`分支接收的`err`参数是一个`Error`对象的实例，其`message`就是响应数据格式中的`msg`，
响应数据的`code`可以通过`err.code`访问。
```js
// 调用层级嵌套的接口
api.user.getUserInfo()
  .then((data) => {})
  .catch((err) => {});
```

3. 接口传参：
```js
api.login({ username: '' });
api.user.updateUserInfo({ username: '' });
```
+ 无论接口是 GET / POST，传参方式是统一的；
+ 对于 GET 接口，Vack 会将参数携带在 query 中；
+ 对于 POST 接口，Vack 会将参数携带在 body 中。

4. 使用第二个参数添加请求头：
```js
api.user.login({}, {
  'content-type': 'application/json',
});
```

5. 使用第三个参数添加其他 `axios` 函数支持的参数：
```js
api.user.login({}, {}, { timeout: 60000 });
```

## 中间件

### 概念
中间件是可以定制化接口行为的一种机制。使用中间件，可以在接口请求前、请求后、请求异常等时机插入执行逻辑。
使用中间件的方式，就是在定义接口时，在接口路径前面声明 `<中间件名称>`。

正如上面定义 POST 接口一样，`<POST>` 就是 Vack 内置支持的名叫 POST 中间件，作用是将接口的请求方式改为POST。

### 定义

接口中间件编写在 `src/api/hooks` 目录下，文件名全大写或以下划线(_)连接，如：`POST.js`、`POST_FORM.js`。

一个中间件文件的结构是这样：

```js
// src/api/hooks/GET.js

export default function getHook(params) {
  return {
    method: 'GET',
    beforeHooks: [],
    afterHooks: [],
    errorHooks: [],
  };
}
```

+ `params` - 中间件参数
+ `method` - 接口的请求方式
+ `beforeHooks` - 在请求发出前插入钩子函数
+ `afterHooks` - 在请求成功时插入钩子函数
+ `errorHooks` - 在请求异常时插入钩子函数

#### beforeHooks

在请求发出前插入钩子函数，可用于修改请求方式、请求参数、请求头等信息。
钩子函数可以声明多个，多个函数之间依次执行。
每个钩子函数会接收当前请求的`配置参数(RequestConfig)`对象并且可以选择性的返回新配置，新的配置会合并覆盖旧的配置：

```ts
interface RequestConfig {
  // 当前请求的地址
  url: string;
  // 当前的请求参数
  data: any;
  // 请求头
  headers: AxiosRequestHeaders;
  // axios的响应对象
  response: AxiosResponse | null;
  // axios实例的其它参数
  opts: AxiosRequestConfig;
  // 当前的请求函数
  apiHandle: Function;
}

function beforeHook(config: RequestConfig): RequestConfig
```

#### afterHooks

在请求发送成功且响应数据的状态码为 `codeOK` 时插入钩子函数，可用于修改响应数据，支持Promise。
每个钩子函数依次执行，并且接收两个参数，第一个是响应数据的 data，第二个是当前请求的配置参数。
上游钩子返回的数据将作为下游钩子的新响应数据。

```ts
function afterHook(data: any, config: RequestConfig): Promise<any>
```

#### errorHooks

在请求发送异常，或响应数据的状态码不为 `codeOK` 时插入钩子函数，可在接口请求异常时做重新请求等操作，支持Promise。
每个钩子函数依次执行，并且接收两个参数，第一个是 Error 实例表示当前异常信息，第二个是当前请求的配置参数。
如果上游钩子不再抛出异常，那么下游的其它 error 钩子将不再执行，且返回的数据将作为接口的成功响应数据。

```ts
class RequestError extends Error {
  // 异常状态码
  code: unknown;
}

function errorHook(err: RequestError, config: RequestConfig): Promise<any>
```

### 使用

中间件可以针对单个接口使用，即在接口的地址前面以 `<中间件>` 形式声明。支持同时声明多个中间件，每个中间件会依次执行。
```js
export const apiUrls = {
  login: '<POST><MY_HOOK>/login',
};
```

中间件针对单个接口使用时，支持传递参数：
```js
export const apiUrls = {
  login: '<POST:content-type=application/json>/login',
  update: '<POST:timeout=6000>/update',
};

export default function postHook(params) {
  console.log(params['content-type']);
  // api.login -> "application/json"
  // api.update -> undefined

  console.log(params.timeout);
  // api.login -> undefined
  // api.update -> "6000"

  return {
    method: 'POST',
  };
}
```

中间件也可以全局声明，这将对所有的接口请求都生效。
全局中间件声明在 `src/api/config.js` 的 `globalHooks`：
```js
// src/api/config.js
export const globalHooks = ['MY_GLOBAL_HOOK'];
```
