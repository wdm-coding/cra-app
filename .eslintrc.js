module.exports = {
  extends: ['react-app'],
  rules: {
    'no-restricted-syntax': 2, // 禁止某些语法
    'no-unused-vars': 0, // 禁止出现未使用的变量
    'no-useless-escape': 2, // 禁止不必要的转义字符
    'react/jsx-key': 2, // 防止在数组中使用的JSX元素不具有唯一的key
    'react/self-closing-comp': 2, // 防止组件没有子元素时忘记闭合标签
    'react/jsx-curly-brace-presence': [2, 'never'], // 防止在JSX表达式中省略花括号
    'react/jsx-fragments': [2, 'syntax'], // 防止在JSX中使用不必要的片段
    'react/jsx-pascal-case': 2, // 防止在JSX中使用非PascalCase的组件名
    'react/jsx-props-no-spreading': 2, // 防止在JSX中展开props
    'react/jsx-sort-props': 2, // 防止在JSX中属性排序混乱
    'react/jsx-uses-vars': 2, // 防止在JSX中遗漏变量
    'react/jsx-wrap-multilines': 2, // 防止在JSX中省略多行元素的闭合标签
    'react/no-unescaped-entities': 2, // 防止在JSX中遗漏转义字符
    '@typescript-eslint/no-unused-vars': 0, // 禁止出现未使用的变量
    '@typescript-eslint/no-use-before-define': 0 // 禁止在定义之前使用变量
  }
}
