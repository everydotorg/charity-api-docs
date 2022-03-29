module.exports = {
  extends: [
    "eslint:recommended",
    // Excludes ESLint's rules that conflict with prettier
    "prettier",
  ],
  env: {
    node: true,
    es6: true,
  },
  plugins: ["markdown"],
  overrides: [
    {
      files: ["**/*.md", "**/*.mdx"],
      processor: "markdown/markdown",
    },
  ],
  rules: {
    "max-len": ["error", { code: 80, ignoreUrls: true }],
  },
};
