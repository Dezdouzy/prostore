import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    //RK, Do not check other modules generated paths, check at the end of the project
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "**/generated/**", // Ignore all generated folders
      "**/prisma/client.js", // Specifically ignore Prisma client
      "lib/generated/**" // Your specific path
    ]
  },
  {
    rules: {
      "@typescript-eslint/no-wrapper-object-types": "error",
    },
  },
];

export default eslintConfig;