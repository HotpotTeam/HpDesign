module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  // 自定义路径简称，类始于webpack中的alias
  moduleNameMapper: {
    "^@api/(.*)$": "<rootDir>/src/server/api/$1",
    "^@views/(.*)$": "<rootDir>/src/views/$1",
    "^@com/(.*)$": "<rootDir>/src/components/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@pack(.*)$": "<rootDir>/packages$1"
  },
  // 匹配tests目录下的spec.js和test.js文件进行测试，默认值为tests/unit文件下的文件测试
  "testMatch": [
    "<rootDir>/tests/**/*.spec.js",
    "<rootDir>/tests/**/*.test.js",
  ]
}
