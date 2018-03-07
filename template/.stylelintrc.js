/**
 * stylelint 配置
 * @author Allenice <994298628@qq.com>
 * @date 2017-07-20 09:57:50
 */

module.exports = {
    ignoreFiles: ['node_modules/**/*.scss'],
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    rules: {
        'color-hex-case': 'upper',
        'color-hex-length': null,
        'max-empty-lines': 1,
        indentation: 4,
        // 字符串使用双引号
        'string-quotes': 'double',
        // 使用了 autoprefix 不需要前缀
        'property-no-vendor-prefix': true,
        'selector-type-no-unknown': null,
        'selector-pseudo-element-colon-notation': null,
        'selector-pseudo-class-no-unknown': null,
        'number-leading-zero': null,
        // 属性顺序
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes']
            }
        ],
        // 属性顺序
        'order/order': [
            'dollar-variables',
            'custom-properties',
            'at-rules',
            'declarations',
            'rules'
        ],
        'order/properties-order': [
            'display',
            'float',
            'position',
            {
                order: 'flexible',
                properties: ['left', 'top', 'right', 'bottom']
            },
            'width',
            'height',
            {
                order: 'flexible',
                properties: [
                    'min-width',
                    'max-width',
                    'min-height',
                    'max-height',
                    'line-height'
                ]
            },
            'padding',
            {
                order: 'flexible',
                properties: [
                    'padding-left',
                    'padding-top',
                    'padding-right',
                    'padding-bottom'
                ]
            },
            'margin',
            {
                order: 'flexible',
                properties: [
                    'margin-left',
                    'margin-top',
                    'margin-right',
                    'margin-bottom'
                ]
            },
            'border',
            {
                order: 'flexible',
                properties: [
                    'border-left',
                    'border-top',
                    'border-right',
                    'border-bottom',
                    'border-radius'
                ]
            },
            'background',
            {
                order: 'flexible',
                properties: [
                    'background-image',
                    'background-position',
                    'background-repeat',
                    'background-size',
                    'background-color'
                ]
            },
            'color',
            {
                order: 'flexible',
                properties: ['font-weight', 'font-size']
            },
            {
                order: 'flexible',
                properties: ['text-align']
            }
        ]
    }
}
