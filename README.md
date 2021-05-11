# jh-ui
## This is a ui component library based on Vue2, which own a light color and simple style

## 安装

npm install jh-ui-vue

## 全局导入

import Jhui from ‘jh-ui-vue’

import 'jh-ui-vue/dist/jh-ui.css'

Vue.use(Jhui)




## jh-button

| 属性     | 功能     | 参数值                            | 默认值 | 类型    |
|----------|----------|----------------------------------|-------|---------|
| type     | 按钮类型 | confirm, message, remind, warning | 无     | string  |
| plain    | 淡雅风格 | —                                 | false  | boolean |
| round    | 花瓣按钮 | left，right                       | null   | string  |
| circle   | 圆形按钮 | —                                 | false  | boolean |
| disabled | 禁用按钮 | —                                 | false  | boolean |

## jh-dialog

| 属性    | 功能                   | 默认值 | 类型    |
|---------|------------------------|--------|--------|
| title   | 设置标题               | “提示“ | string  |
| width   | 宽度值                 | 30vw   | string |
| top     | 对话框与视口上边框距离 | 30vh   | string  |
| display | 控制对话框的显示隐藏   | true   | Boolean |

两个命名插槽：

title

foot

分别对应对话框头部和底部位置。

## jh-input

| 属性        | 功能                 | 默认值 | 类型    |
|-------------|---------------------|--------|--------|
| name        | —                   | —      | String |
| id          | —                   | —      | String |
| value       | —                   | —      | String |
| placeholder | 输入提示             | —      | String |
| type        | 输入框类型           | —      | String |
| disabled    | 输入框是否可用       | false  | Boolean|
| clearable   | 是否提供内容一键清除 | false  | Boolean |

说明：

jh-input支持v-model；

为了避免原生图标重叠，password类型input框不支持clearable；

## jh-switch

| 属性      | 功能           | 参数值     | 默认值 | 类型    |
|-----------|---------------|------------|--------|--------|
| name      | —              | —         | —      | String  |
| value     | switch状态     | false/true | false  | Boolean |
| on-color  | switch on颜色  | —          | —      | String  |
| off-color | switch off颜色 | —          | —      | String  |

支持v-model

## jh-radio

| 属性  | 功能           | 默认值 | 类型   |
|-------|---------------|--------|--------|
| name  | —              | —      | String |
| value | —              | null   | 任意   |
| label | radio的value值 | 空字符 | 任意   |

支持v-model；

提供\<jh-radio-group\>组件将一组jh-radio统一绑定到同一data；

当\<jh-radio\>\< /jh-radio
\>给了文本时，组件会优先渲染文本；若没有给文本，则渲染label值；下面\<jh-checkbox\>相同。

注意：

jh-radio必须指明唯一label才能实现单选效果。

默认label都为空，即共同绑定到同一个选项。

## jh-checkbox

| 属性   | 功能            | 默认值 | 类型           |
|--------|----------------|--------|---------------|
| name   | 原生            | —      | String         |
| value  | 绑定值          | false  | Boolean、Array |
| label  | checkbox的value | 空字符 | String         |

支持v-model；

支持使用组件\<jh-checkbox-grop\>进行统一v-model绑定；

在jh-checkbox没有页面文本时，会将label作为文本渲染；

## jh-form

jh-ui提供jh-form和jh-form-item对表单元素做统一管理

jh-form

| 属性       | 功能     | 默认值 | 类型  |
|------------|----------|-------|-------|
| value      | 绑定值   |        | Objec |
| labelWidth | 表单宽度 | 空字符 | Strin |

jh-form-item

| 属性  | 功能       | 默认值 | 类型           |
|-------|-----------|--------|----------------|
| label | 表单项标签 | 空字符 | String、Number |

### 补充说明
额外样式可以在组件标签内用style添加


