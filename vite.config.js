import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dice_game/',  // Set the base path to your repo name
  plugins: [react()],
});
