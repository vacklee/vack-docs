---
title: 状态共享
---

# 状态共享

Vack 的状态共享基于 [Pinia](https://pinia.web3doc.top/) 实现。为了方便使用，在此基础上做了进一步的封装。

## 定义

Vack 基于 Pinia 封装了一个 `StoreBase` 基类，创建一个状态共享模块时需要继承该类。

+ StoreBase 基类定义在 `src/store/base.js`
+ 状态共享模块定义在 `src/store/*.js`

以定义一个 User 共享状态举例：

```js
// src/store/user.js
import StoreBase from './base';

export default new StoreBase('user', {
  // 定义 state
  cnName: '中文名',
  enName: 'en_name',
  
  // 定义 getter / setter
  get fullName() {
    return `${this.enName}(${this.cnName})`;
  },
  set fullName() {},

  // 定义函数
  updateName() {},
});
```

## 使用

```js
// 引入
import user from '@/store/user';

// 访问 state
console.log(user.cnName);
// 访问 getter
console.log(user.fullName);
// 调用函数
user.updateName();

// state赋值
user.cnName = '';
// setter赋值
user.fullName = '';
```
