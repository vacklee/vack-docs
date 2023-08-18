---
title: 环境配置
---

# 环境配置

Vack 支持多环境，可以使用 .env.* 文件配置环境变量，默认支持 dev、test、prod 三种环境。
```
├─ .env.dev
├─ .env.test
├─ .env.prod
```

## 环境变量

开发者可以根据项目需要定义环境变量。
Vack 默认使用了以下环境变量：

环境变量|说明
:-|:-|
NODE_ENV|编译模式
VITE_BASE|站点的基础路径
VITE_API_BASEURL|接口的基础路径
VITE_API_MOCK|是否启用接口模拟
VITE_LOCALE_DEFAULT|国际化默认语言

+ `VITE_BASE` 默认为 `/`，即部署在一级路由；如果需要部署在二级路由，则需修改为 `/xxx`；
+ `VITE_API_BASEURL` 也作为 axios 实例的 `BASE_URL` 参数。

## 新增环境

Vack 默认支持 dev、test、prod 三种环境，开发者可以根据项目需要新增环境。
新增一个环境只需要创建环境变量文件，再添加相应的调试/构建命令即可。

**以新增一个 `local` 环境举例：**

1. 复制 `.env.dev` 命名为 `.env.local`：
```bash
$ cp .env.dev .env.local
```

2. 在 `package.json` 添加`调试命令(dev:local)`和`构建命令(build:local)`：
```json
{
  "scripts": {
    "dev:local": "vite --mode local",
    "build:local": "vite build --mode local"
  }
}
```
