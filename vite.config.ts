import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'repository-name' with your actual GitHub repository name if deploying to a project page.
  // If deploying to username.github.io, remove this line or set it to '/'.
  base: './', 
});