module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            1,
            "tab"
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
        "react/display-name": 0,
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 0,
        "react/no-set-state": 0,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-multi-comp": 1,
        "react/no-unknown-property": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "jsx-indent-props": [2, "tab"],
        "react/wrap-multilines": 1
    }
};
