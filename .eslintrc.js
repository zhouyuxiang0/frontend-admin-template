module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser',
    // "parser": "babel-eslint",
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  plugins: ['vue', 'typescript'],
  extends: [
    'alloy',
    'plugin:vue/recommended',
    'eslint-config-alloy/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'typescript/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: true
      }
    ],
    semi: ['error', 'never'],
    indent: [
      // 两个空格
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    complexity: [
      // 圈复杂度最大为10
      'error',
      {
        max: 10
      }
    ],
    'max-lines': [
      'error',
      {
        // 单文件最大行数为1000
        max: 2000,
        skipComments: true
      }
    ],
    // radix: 'off', // parseInt 不是必须传入第二个参数
    'max-statements-per-line': [
      // 一行只能有一条语句
      'error',
      {
        max: 1
      }
    ]
  }
}
