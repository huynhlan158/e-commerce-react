import type { Config } from 'tailwindcss';
import {
  commonTheme,
  fontSize,
  spacing,
  borderWidth,
  screens,
} from './src/config/customTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...commonTheme,
      fontSize,
      spacing,
      borderWidth,
      screens,
    },
  },
  plugins: [],
} satisfies Config;
