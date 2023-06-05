import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    include: ['**/(*.)?{test,spec}.ts'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    coverage: {
      provider: 'istanbul',
      include: [
        './__test__/useCases/**/**/**/*.ts',
        './__test__/controllers/**/**/**/*.ts',
      ],
    },
  },
})
