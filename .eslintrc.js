// .eslintrc.js
module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-console": "warn",
    "react/no-unescaped-entities": "off",
  },
  ignorePatterns: ["**/*"], // Optional: ignore all files
};
