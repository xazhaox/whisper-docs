# 🎉🎉🎉快速上手

本文会帮助你从头启动、搭建此项目

## 环境准备🥦

本地环境需要安装 [Node.js 16.x+](https://nodejs.org/en/)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)、[Git](https://git-scm.com/)
:::warning

Node.js 版本推荐安装 **16+** 以上，版本过低依赖包可能安装失败。

默认使用 pnpm 作为安装依赖包工具，使用 yarn、npm 没有 lock 可能会安装到最新版依赖。

:::

## 工具配置👛

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

> 🌈 推荐安装以下插件：

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) ==> Vue3 官方插件
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) ==> Vue3 官方插件（TypeScript）
- [Vue 3 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets) ==> Vue3 代码提示
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ==> 代码检查
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) ==> CSS 代码检查 && 格式化
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ==> 代码格式化
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) ==> 统一不同编辑器的编码风格
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) ==> 校验单词拼写错误
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) ==> Sass 样式编写
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) ==> 高亮 .env 文件

## 需要掌握的基础知识🍆

- 本项目基于 Vue3.4、Vite5、TS、Pinia、Ant-Design-Vue 开发，并全部采用了的单文件组件 `＜script setup＞` 写法。
- 建议您在开发前先学习以下内容，提前了解和学习这些知识，会对项目理解非常有帮助：
  - [Vue3 文档](https://cn.vuejs.org/guide/introduction.html)
  - [Vue-Router 文档](https://router.vuejs.org/zh/guide/)
  - [Vite 文档](https://cn.vitejs.dev/guide/)
  - [TypeScript 文档](https://www.typescriptlang.org/zh/docs/)
  - [Pinia 文档](https://pinia.web3doc.top/introduction.html)
  - [Ant-Design-Vue 文档](https://www.antdv.com/index-cn)
  - [ES6 教程](https://es6.ruanyifeng.com/)

:::warning

- 开发 Vue3 项目请开启 Volar 插件、禁用 Vetur 插件。
- 请配置项目默认格式化程序为 Prettier。

:::

## 代码拉取🌶️

### 从 GitHub 拉取代码：

```bash
# 克隆代码
git clone https://github.com/xazhaox/whisper-vue.git
```

### 从 Gitee 拉取代码：

```bash
# 克隆代码
git clone https://gitee.com/xaJa/whisper-vue.git
```

## 安装使用步骤🥕

### 安装依赖：

```bash
# 使用 pnpm
pnpm install
```

### 运行项目：

```bash
# 以下两个命令都可以
pnpm dev
pnpm serve
```

### 打包项目：

```bash
# 开发环境
pnpm build:dev

# 测试环境
pnpm build:uat

# 生产环境
pnpm build:prod
```

### 校验、格式化代码：

```bash
# eslint 检测代码
pnpm lint:eslint

# prettier 格式化代码
pnpm lint:prettier

# stylelint 格式化样式
pnpm lint:stylelint
```

### 提交代码：

```bash
# 提交代码（提交前会自动执行 lint:lint-staged 命令）
pnpm commit
```

### .vscode > extensions.json

```json
{
  "recommendations": [
    "vue.volar",
    "vue.vscode-typescript-vue-plugin",
    "hollowtree.vue-snippets",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "esbenp.prettier-vscode",
    "editorconfig.editorconfig",
    "streetsidesoftware.code-spell-checker",
    "syler.sass-indented",
    "mikestead.dotenv"
  ]
}
```

## npm script 详解

```json
{
  "scripts": {
    // 本地运行(dev环境)
    "dev": "vite --mode dev",
    // 本地运行(dev环境)
    "serve": "vite --mode dev",
    // 构建打包(dev环境)
    "build:dev": "vue-tsc && vite build --mode dev",
    // 构建打包(test环境)
    "build:uat": "vue-tsc && vite build --mode uat",
    // 构建打包(pro环境)
    "build:prod": "vue-tsc && vite build --mode prod",
    // 检查项目 ts 类型
    "type:check": "vue-tsc --noEmit --skipLibCheck",
    // 本地环境预览构建后的 dist
    "preview": "npm run build:dev && vite preview",
    // 执行 eslint 校验
    "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
    // 执行 prettier 格式化
    "lint:prettier": "prettier --write \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\" \"*.ts\"",
    // 执行 stylelint 格式化
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    // 执行 lint-staged.config.js 文件下的命令
    "lint:lint-staged": "lint-staged",
    // 初始化 husky 配置
    "prepare": "husky install",
    // 自动更新版本
    "release": "standard-version",
    // 提交代码(可自定义配置执行命令)
    "commit": "git add -A && czg && git push"
  }
}
```

# 项目规范🍄

本项目推荐使用 Visual Studio Code 开发

## 项目文件、组件命名规范

- Link（v3）：https://cn.vuejs.org/style-guide
- Link（v2）：https://v2.cn.vuejs.org/v2/style-guide

> 💢 Whisper Admin 采用 Vue 官方推荐的风格指南，请务必查看

## 代码格式化工具（Prettier）🫒

### 1、下载 prettier 相关依赖：

```bash
pnpm install prettier -D
```

### 2、安装 Vscode 插件（Prettier）：

![Prettier](/images/Prettier.png)

### 3、配置 Prettier（.prettierrc.cjs）：

```javascript
// @see: https://www.prettier.cn

module.exports = {
  // 指定最大换行长度
  printWidth: 130,
  // 缩进制表符宽度 | 空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
  useTabs: false,
  // 结尾不用分号 (true：有，false：没有)
  semi: true,
  // 使用单引号 (true：单引号，false：双引号)
  singleQuote: false,
  // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
  quoteProps: "as-needed",
  // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
  trailingComma: "none",
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
  bracketSpacing: true,
  // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
  bracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
  arrowParens: "avoid",
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
  insertPragma: false,
  // 用于控制文本是否应该被换行以及如何进行换行
  proseWrap: "preserve",
  // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
  htmlWhitespaceSensitivity: "css",
  // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
  endOfLine: "auto",
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
  rangeStart: 0,
  rangeEnd: Infinity
};
```

## 代码规范工具（ESLint）🍓

### 1、下载 ESLint 相关依赖：

```bash
pnpm install eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

|               依赖               |                               作用描述                               |
| :------------------------------: | :------------------------------------------------------------------: |
|              eslint              |                            ESLint 核心库                             |
|      eslint-config-prettier      |               关掉所有和 Prettier 冲突的 ESLint 的配置               |
|      eslint-plugin-prettier      |         将 Prettier 的 rules 以插件的形式加入到 ESLint 里面          |
|        eslint-plugin-vue         |                      为 Vue 使用 ESlint 的插件                       |
| @typescript-eslint/eslint-plugin |      ESLint 插件，包含了各类定义好的检测 TypeScript 代码的规范       |
|    @typescript-eslint/parser     | ESLint 的解析器，用于解析 TypeScript，从而检查和规范 TypeScript 代码 |

### 2、安装 Vscode 插件（ESLint）：

![ESLint](/images/ESLint.png)

### 3、配置 ESLint（.eslintrc.cjs）：

```javascript
// @see: http://eslint.cn

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 指定如何解析语法
  parser: "vue-eslint-parser",
  // 优先级低于 parse 的语法解析配置
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    }
  },
  // 继承某些已有的规则
  extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    "@typescript-eslint/ban-ts-comment": "error", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    "@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/ban-types": "off", // 禁止使用特定类型
    "@typescript-eslint/no-var-requires": "off", // 允许使用 require() 函数导入模块
    "@typescript-eslint/no-empty-function": "off", // 禁止空函数
    "@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)

    // vue (https://eslint.vuejs.org/rules)
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效
    "vue/v-slot-style": "error", // 强制执行 v-slot 指令样式
    "vue/no-mutating-props": "error", // 不允许改变组件 prop
    "vue/custom-event-name-casing": "error", // 为自定义事件名称强制使用特定大小写
    "vue/html-closing-bracket-newline": "error", // 在标签的右括号之前要求或禁止换行
    "vue/attribute-hyphenation": "error", // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
    "vue/attributes-order": "off", // vue api使用顺序，强制执行属性顺序
    "vue/no-v-html": "off", // 禁止使用 v-html
    "vue/require-default-prop": "off", // 此规则要求为每个 prop 为必填时，必须提供默认值
    "vue/multi-word-component-names": "off" // 要求组件名称始终为 “-” 链接的单词
  }
};
```

## 样式规范工具（StyleLint）🍹

### 1、下载 StyleLint 相关依赖：

```bash
pnpm install stylelint stylelint-config-html stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-config-standard stylelint-config-standard-scss stylelint-config-recess-order postcss postcss-html -D
```

|               依赖                |                                                                     作用描述                                                                     |
| :-------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|             stylelint             |                                                                 stylelint 核心库                                                                 |
|       stylelint-config-html       |                                  Stylelint 的可共享 HTML（和类似 HTML）配置，捆绑 postcss-html 并对其进行配置。                                  |
| stylelint-config-recommended-scss |                                         扩展 stylelint-config-recommended 共享配置，并为 SCSS 配置其规则                                         |
| stylelint-config-recommended-vue  |                                         扩展 stylelint-config-recommended 共享配置，并为 Vue 配置其规则                                          |
|     stylelint-config-standard     | 打开额外的规则来执行在规范和一些 CSS 样式指南中发现的通用约定，包括：惯用 CSS 原则，谷歌的 CSS 样式指南，Airbnb 的样式指南，和 @mdo 的代码指南。 |
|  stylelint-config-standard-scss   |                                          扩展 stylelint-config-standard 共享配置，并为 SCSS 配置其规则                                           |
|   stylelint-config-recess-order   |                                                               属性的排序（插件包）                                                               |
|              postcss              |                                                              postcss-html 的依赖包                                                               |
|           postcss-html            |                                                   用于解析 HTML（和类似 HTML）的 PostCSS 语法                                                    |

### 2、安装 Vscode 插件（StyleLint）：

![Stylelint](/images/Stylelint.png)

### 3、在目录的 .vscode 文件夹下新建 settings.json：

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.enable": true,
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass", "html"],
  "files.eol": "\n"
}
```

> 😎 也可以在 vscode 中全局配置上述 json 代码 😎

### 4、配置 StyleLint（.stylelintrc.cjs）：

```javascript
// @see: https://stylelint.io

module.exports = {
  root: true,
  // 继承某些已有的规则
  extends: [
    "stylelint-config-standard", // 配置 stylelint 拓展插件
    "stylelint-config-html/vue", // 配置 vue 中 template 样式格式化
    "stylelint-config-standard-scss", // 配置 stylelint scss 插件
    "stylelint-config-recommended-vue/scss", // 配置 vue 中 scss 样式格式化
    "stylelint-config-recess-order" // 配置 stylelint css 属性书写顺序插件,
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ["**/*.{vue,html}"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "function-url-quotes": "always", // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
    "scss/at-import-partial-extension": null, // 解决不能使用 @import 引入 scss 文件
    "property-no-unknown": null, // 禁止未知的属性
    "no-empty-source": null, // 禁止空源码
    "selector-class-pattern": null, // 强制选择器类名的格式
    "value-no-vendor-prefix": null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    "no-descending-specificity": null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器
    "value-keyword-case": null, // 解决在 scss 中使用 v-bind 大写单词报错
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ]
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"]
};
```

## EditorConfig 配置🎈

### 1、简介：

- **EditorConfig** 帮助开发人员在 **不同的编辑器** 和 **IDE** 之间定义和维护一致的编码样式。

### 2、安装 VsCode 插件（EditorConfig ）：

![EditorConfig](/images/EditorConfig.png)

### 3、配置 EditorConfig（.editorconfig）：

```javascript
# @see: http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
end_of_line = lf # 控制换行类型(lf | cr | crlf)
insert_final_newline = true # 始终在文件末尾插入一个新行
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
max_line_length = 130 # 最大行长度

[*.md] # 表示仅对 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪

```

## Git 流程规范配置🎃

|              依赖               |                                   作用描述                                   |
| :-----------------------------: | :--------------------------------------------------------------------------: |
|              husky              |          操作 **git** 钩子的工具（在 **git xx** 之前执行某些命令）           |
|           lint-staged           | 在提交之前进行 **eslint** 校验，并使用 **prettier** 格式化本地暂存区的代码， |
|         @commitlint/cli         |            校验 **git commit** 信息是否符合规范，保证团队的一致性            |
| @commitlint/config-conventional |                            **Anglar** 的提交规范                             |
|               czg               |               交互式命令行工具生成标准化的 git commit message                |
|             cz-git              |   一款工程性更强，轻量级，高度自定义，标准输出格式的 **commitize** 适配器    |

### 1、husky（操作 git 钩子的工具）：

> **安装：**

```bash
pnpm install husky -D
```

> **使用（为了添加.husky 文件夹）：**

```bash
# 编辑 package.json > prepare 脚本并运行一次

pnpm set-script prepare "husky install"
pnpm prepare
```

### 2、 lint-staged（本地暂存代码检查工具）

> **安装：**

```bash
pnpm install lint-staged --D
```

> **添加 ESlint Hook（在.husky 文件夹下添加 pre-commit 文件）：**

> **作用：通过钩子函数，判断提交的代码是否符合规范，并使用 prettier 格式化代码**

```bash
npx husky add .husky/pre-commit "npm run lint:lint-staged"
```

> 新增 **lint-staged.config.cjs** 文件：

```bash
module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "package.json": ["prettier --write"],
  "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],
  "*.{scss,less,styl,html}": ["stylelint --fix", "prettier --write"],
  "*.md": ["prettier --write"]
};
```

### 3、commitlint（commit 信息校验工具，不符合则报错）

> **安装：**

```bash
pnpm install @commitlint/cli @commitlint/config-conventional -D
```

> **配置命令（在.husky 文件夹下添加 commit-msg 文件）：**

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 4、commitizen（基于 Node.js 的 git commit 命令行工具，生成标准化的 message）

```bash
// 安装 czg，如此一来可以快速使用 czg 命令进行启动。
pnpm install czg -D
```

### 5、cz-git

> **指定提交文字规范，一款工程性更强，高度自定义，标准输出格式的 commitizen 适配器**

```bash
pnpm install cz-git -D
```

> **配置 package.json：**

```bash
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```

> **新建 commitlint.config.js 文件：**

```javascript
// @see: https://cz-git.qbenben.com/zh/guide
const fs = require("fs");
const path = require("path");

const scopes = fs
  .readdirSync(path.resolve(__dirname, "src"), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.replace(/s$/, ""));

/** @type {import('cz-git').UserConfig} */
module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    messages: {
      // type: "Select the type of change that you're committing:",
      // scope: "Denote the SCOPE of this change (optional):",
      // customScope: "Denote the SCOPE of this change:",
      // subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      // breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      // footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      // customFooterPrefixs: "Input ISSUES prefix:",
      // footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      // confirmCommit: "Are you sure you want to proceed with the commit above?"
      // 中文版
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: "选择关联issue前缀（可选）:",
      customFooterPrefixs: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?"
    },
    types: [
      // {
      //   value: "feat",
      //   name: "feat:     🎉  A new feature",
      //   emoji: "🎉"
      // },
      // {
      //   value: "fix",
      //   name: "fix:      🎊  A bug fix",
      //   emoji: "🎊"
      // },
      // {
      //   value: "docs",
      //   name: "docs:     🥬  Documentation only changes",
      //   emoji: "🥬"
      // },
      // {
      //   value: "style",
      //   name: "style:    🎨  Changes that do not affect the meaning of the code",
      //   emoji: "🎨"
      // },
      // {
      //   value: "refactor",
      //   name: "refactor: 🏵️   A code change that neither fixes a bug nor adds a feature",
      //   emoji: "🏵️"
      // },
      // {
      //   value: "perf",
      //   name: "perf:     🥕  A code change that improves performance",
      //   emoji: "🥕"
      // },
      // {
      //   value: "test",
      //   name: "test:     🎯  Adding missing tests or correcting existing tests",
      //   emoji: "🎯"
      // },
      // {
      //   value: "build",
      //   name: "build:    🧮   Changes that affect the build system or external dependencies",
      //   emoji: "🧮"
      // },
      // {
      //   value: "ci",
      //   name: "ci:       🫒  Changes to our CI configuration files and scripts",
      //   emoji: "🫒"
      // },
      // {
      //   value: "chore",
      //   name: "chore:    🍉  Other changes that don't modify src or test files",
      //   emoji: "🍉"
      // },
      // {
      //   value: "revert",
      //   name: "revert:   📛  Reverts a previous commit",
      //   emoji: "📛"
      // },
      // {
      //   value: "wip",
      //   name: "wip:      🪗  work in process",
      //   emoji: "🪗"
      // },
      // {
      //   value: "workflow",
      //   name: "workflow: 👛  workflow improvements",
      //   emoji: "👛"
      // },
      // {
      //   value: "type",
      //   name: "type:     🚀  type definition file changes",
      //   emoji: "🚀"
      // }
      // 中文版
      {
        value: "feat",
        name: "特性:   🎉  新增功能",
        emoji: "🎉"
      },
      {
        value: "fix",
        name: "修复:   🎊  修复缺陷",
        emoji: "🎊"
      },
      {
        value: "docs",
        name: "文档:   🥬  文档变更",
        emoji: "🥬"
      },
      {
        value: "style",
        name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）",
        emoji: "🎨"
      },
      {
        value: "refactor",
        name: "重构:   🏵️  代码重构（不包括 bug 修复、功能新增）",
        emoji: "🏵️"
      },
      {
        value: "perf",
        name: "性能:   🥕  性能优化",
        emoji: "🥕"
      },
      {
        value: "test",
        name: "测试:   🎯  添加疏漏测试或已有测试改动",
        emoji: "🎯"
      },
      {
        value: "build",
        name: "构建:   🧮  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
        emoji: "🧮"
      },
      {
        value: "ci",
        name: "集成:   🫒  修改 CI 配置、脚本",
        emoji: "🫒"
      },
      {
        value: "revert",
        name: "回退:   📛  回滚 commit",
        emoji: "📛"
      },
      {
        value: "chore",
        name: "其他:   🍉  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
        emoji: "🍉"
      },
      {
        value: "wip",
        name: "开发:   🪗  正在开发中",
        emoji: "🪗"
      },
      {
        value: "workflow",
        name: "工作流: 👛  工作流程改进",
        emoji: "👛"
      },
      {
        value: "types",
        name: "类型:   🚀  类型定义文件修改",
        emoji: "🚀"
      }
    ],
    useEmoji: true,
    scopes: [...scopes],
    customScopesAlign: "bottom",
    emptyScopesAlias: "empty",
    customScopesAlias: "custom",
    allowBreakingChanges: ["feat", "fix"]
  }
};
```

## 配置 package.json 命令🍁

```json
{
  "scripts": {
    // 本地运行(dev环境)
    "dev": "vite --mode dev",
    // 本地运行(dev环境)
    "serve": "vite --mode dev",
    // 构建打包(dev环境)
    "build:dev": "vue-tsc && vite build --mode dev",
    // 构建打包(test环境)
    "build:uat": "vue-tsc && vite build --mode uat",
    // 构建打包(pro环境)
    "build:prod": "vue-tsc && vite build --mode prod",
    // 检查项目 ts 类型
    "type:check": "vue-tsc --noEmit --skipLibCheck",
    // 本地环境预览构建后的 dist
    "preview": "npm run build:dev && vite preview",
    // 执行 eslint 校验
    "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
    // 执行 prettier 格式化
    "lint:prettier": "prettier --write \"src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}\" \"*.ts\"",
    // 执行 stylelint 格式化
    "lint:stylelint": "stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
    // 执行 lint-staged.config.js 文件下的命令
    "lint:lint-staged": "lint-staged",
    // 初始化 husky 配置
    "prepare": "husky install",
    // 自动更新版本
    "release": "standard-version",
    // 提交代码(可自定义配置执行命令)
    "commit": "git add -A && czg && git push"
  }
}
```

## 文件资源目录 📚

```json
Whisper-Admin
├─ .husky                  # husky 配置文件
├─ .vscode                 # VSCode 推荐配置
├─ build                   # Vite 配置项
├─ assets                  # 文档静态资源
├─ public                  # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                  # API 接口管理
│  ├─ assets               # 静态资源文件
│  ├─ components           # 全局组件
│  ├─ config               # 全局配置项
│  ├─ directives           # 全局指令文件
│  ├─ enums                # 项目常用枚举
│  ├─ hooks                # 常用 Hooks 封装
│  ├─ languages            # 语言国际化 i18n
│  ├─ layouts              # 框架布局模块
│  ├─ routers              # 路由管理
│  ├─ stores               # pinia store
│  ├─ styles               # 全局样式文件
│  ├─ typings              # 全局 ts 声明
│  ├─ utils                # 常用工具库
│  ├─ views                # 项目所有页面
│  ├─ App.vue              # 项目主组件
│  ├─ main.ts              # 项目入口文件
│  └─ vite-env.d.ts        # 指定 ts 识别 vue
├─ .editorconfig           # 统一不同编辑器的编码风格
├─ .env                    # vite 常用配置
├─ .env.development        # 开发环境配置
├─ .env.production         # 生产环境配置
├─ .env.test               # 测试环境配置
├─ .eslintignore           # 忽略 Eslint 校验
├─ .eslintrc.cjs           # Eslint 校验配置文件
├─ .gitignore              # 忽略 git 提交
├─ .prettierignore         # 忽略 Prettier 格式化
├─ .prettierrc.cjs         # Prettier 格式化配置
├─ .stylelintignore        # 忽略 stylelint 格式化
├─ .stylelintrc.cjs        # stylelint 样式格式化配置
├─ CHANGELOG.md            # 项目更新日志
├─ commitlint.config.cjs   # git 提交规范配置
├─ index.html              # 入口 html
├─ LICENSE                 # 开源协议文件
├─ lint-staged.config.cjs  # lint-staged 配置文件
├─ package-lock.json       # 依赖包包版本锁
├─ package.json            # 依赖包管理
├─ postcss.config.cjs      # postcss 配置
├─ README.md               # README 介绍
├─ tsconfig.json           # typescript 全局配置
└─ vite.config.ts          # vite 全局配置文件
```

## 浏览器支持🌎

- 本地开发推荐使用 Chrome 最新版浏览器 [Download](https://www.google.com/intl/zh-CN/chrome/)。

- 生产环境支持现代浏览器，不在支持 IE 浏览器，更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)。

  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
  | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
  |                                                                                                                not support                                                                                                                |                                                                                          last 2 versions                                                                                          |                                                                                               last 2 versions                                                                                                |                                                                                             last 2 versions                                                                                              |                                                                                             last 2 versions                                                                                              |

## 在线 Mock 平台🧩

- FastMock：[https://www.fastmock.site](https://www.fastmock.site/)
- EasyMock：[https://mock.mengxuegu.com](https://mock.mengxuegu.com/)

## 兼容性

danger xxx.? .token 报错 如遇报错问题，请升级最新浏览器，有可能是浏览器不支持最新语法
