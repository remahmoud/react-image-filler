export default {
    roots: ['src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['jest-canvas-mock'],
}
