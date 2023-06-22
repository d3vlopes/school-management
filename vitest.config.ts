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
        'src/useCases/**/**/**/*UseCase.ts',
        'src/presentation/controllers/**/**/**/*Controller.ts',
        'src/infra/adapters/**/**/*.ts',
      ],
    },
  },
})
