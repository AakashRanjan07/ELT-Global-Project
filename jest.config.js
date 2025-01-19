module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use babel-jest for JS/TS files
  },
  transformIgnorePatterns: [
    "node_modules/(?!lucide-react)", // Ensure lucide-react is transformed
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS/SCSS modules
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"], // Match test files
};
