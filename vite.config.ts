import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuração do Vite
 * @see https://vitejs.dev/config/
 */

export default defineConfig({
  plugins: [react()],
  base: 'screen_based_app_template',
});
