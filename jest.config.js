const { defaults } = require('jest-config');
module.exports = {
    'verbose': true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/"
    ],
    'coverageThreshold': {
        'global': {
            'branches': 80,
            'functions': 80,
            'lines': 80,
            'statements': 80,
        },
    }
};
