import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react-final-form': path.resolve(
        __dirname,
        './node_modules/react-final-form'
      ),
    }
  },
  plugins: [reactRefresh()]
})
