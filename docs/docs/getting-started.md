---
title: 快速上手
---

# 快速上手

## 依赖环境

+ [Node.js v16.13.2+](https://nodejs.org/)
+ [pnpm](https://pnpm.io/zh/)（可选）

## 脚手架安装

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash
pnpm create vack
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm create vack@latest
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn create vack
```

  </CodeGroupItem>
</CodeGroup>

跟随指引指定项目名称、预设：

```bash
✔ 项目名称： … vack-project
✔ 是否需要接口Mock： … yes
✔ 是否需要多语言： … yes
✔ 是否需要eslint： … yes
✔ 提交代码时检查代码格式： … yes
✔ 是否规范commit提交信息： … yes

项目创建完成，cd vack-project 后可以：

    安装依赖：npm install
    开发调试：npm run dev
```

也可以通过命令行直接指定项目名称、预设

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash
pnpm create vack my-app --preset mock,i18n
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM 6.x">

```bash
npm create vack@latest my-app --preset mock,i18n
```

  </CodeGroupItem>
    <CodeGroupItem title="NPM 7+">

```bash
npm create vack@latest my-app -- --preset mock,i18n
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn create vack my-app --preset mock,i18n
```

  </CodeGroupItem>
</CodeGroup>

当前支持的预设：
|预设|说明|
|:-|:-|
|mock|项目带有 Mock 接口的能力
|i18n|项目带有国际化的能力
|eslint|项目带有 ESLint 配置
|lint-staged|在提交代码时进行代码格式检查
|lint-commit|git commit 提交信息规范化

## 调试命令
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash
pnpm dev
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm run dev
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn dev
```

  </CodeGroupItem>
</CodeGroup>

## 构建命令
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash
pnpm build:dev
pnpm build:test
pnpm build:prod
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM">

```bash
npm run build:dev
npm run build:test
npm run build:prod
```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
yarn build:dev
yarn build:test
yarn build:prod
```

  </CodeGroupItem>
</CodeGroup>
