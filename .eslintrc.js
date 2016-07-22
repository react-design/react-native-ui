module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node" : true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            1,
            "tab",
            {"SwitchCase": 1}
        ],
        "linebreak-style": [
            1,
            "unix"
        ],
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            1,
            "never"
        ],
        "no-mixed-spaces-and-tabs" : 0,
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-indent-props": 0,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-undef": 0,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 1,
        "react/no-unknown-property": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/jsx-indent-props": [2, "tab"],
        "react/wrap-multilines": 1,
        "react/jsx-max-props-per-line": [1, { "maximum": 1 }]
    }
};
