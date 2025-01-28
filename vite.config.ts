import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    workspace: [
      {
        extends: true,
        test: {
          include: ['src/tests/e2e/**/*.spec.ts'],
          name: 'e2e',
          environment: 'prisma/prisma-test-environment.mts',
        },
      },
      {
        extends: true,
        test: {
          include: ['src/tests/unit/**/*.spec.ts'],
          name: 'unit',
        },
      },
    ],
  },
})
