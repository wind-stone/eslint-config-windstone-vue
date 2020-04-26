module.exports = {
    extends: [
        "plugin:vue/recommended"
    ],
    rules: {
        // 覆盖 ESLint 的规则
        "no-console": "warn",
        "no-unused-vars": "error",
        "semi": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],

        // 覆盖 eslint-plugin-vue 配置的规则
        // "vue/comment-directive": "error", // 已包含在 eslint-plugin-vue 插件里
        // "vue/jsx-uses-vars": "error", // 已包含在 eslint-plugin-vue 插件里

        // eslint-plugin-vue, Priority B: Strongly Recommended
        "vue/attribute-hyphenation": "error",
        "vue/html-closing-bracket-newline": "error",
        "vue/html-closing-bracket-spacing": "error",
        "vue/html-end-tags": "error",
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ],
        "vue/html-quotes": "error",
        "vue/html-self-closing": "error",
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 1,
                "multiline": {
                    "max": 1,
                    "allowFirstLine": false
                }
            }
        ],
        "vue/multiline-html-element-content-newline": "error",
        "vue/mustache-interpolation-spacing": "error",
        "vue/name-property-casing": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        "vue/no-template-shadow": "error",
        "vue/prop-name-casing": "error",
        "vue/require-default-prop": "error",
        "vue/require-prop-types": "error",
        "vue/singleline-html-element-content-newline": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",

        // eslint-plugin-vue, Priority C: Recommended
        "vue/attributes-order": "error",
        "vue/no-v-html": "error",
        "vue/order-in-components": "error",
        "vue/this-in-template": "error",

        // eslint-plugin-vue, Uncategorized
        "vue/array-bracket-spacing": "error",
        "vue/arrow-spacing": "error",
        "vue/block-spacing": "error",
        "vue/brace-style": "error",
        "vue/camelcase": "error",
        "vue/comma-dangle": "error",
        "vue/component-name-in-template-casing": "error",
        // "vue/dot-location": "error",
        "vue/eqeqeq": "error",
        "vue/key-spacing": "error",
        // "vue/keyword-spacing": "error",
        "vue/match-component-file-name": "error",
        "vue/no-boolean-default": "off",
        // "vue/no-deprecated-scope-attribute": "error",
        // "vue/no-empty-pattern": "error",
        "no-restricted-syntax": [
            "error",
            "WithStatement"
        ], // 待补充
        "vue/object-curly-spacing": "error",
        "vue/require-direct-export": "off",
        "vue/script-indent": [
            "error",
            4
        ],
        "vue/space-infix-ops": "error",
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        "vue/v-on-function-call": "error",
        // "vue/v-slot-style": "error",
        // "vue/valid-v-slot": "error",
    },
    overrides: [
        {
            "files": [
                "*.vue"
            ],
            "rules": {
                "indent": "off" // 特殊处理，详见 https://eslint.vuejs.org/rules/script-indent.html
            }
        }
    ]
}
