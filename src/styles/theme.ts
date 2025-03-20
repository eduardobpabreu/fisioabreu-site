export const colors = {
  primary: {
    DEFAULT: '#4CAF50', // Verde do logo
    light: '#66BB6A',
    dark: '#388E3C',
  },
  secondary: {
    DEFAULT: '#F5F5F5', // Cor clara para fundos
    light: '#FFFFFF',
    dark: '#E0E0E0',
  },
  accent: {
    DEFAULT: '#8BC34A', // Verde mais claro para acentos
    light: '#9CCC65',
    dark: '#7CB342',
  },
  neutral: {
    50: '#FFFFFF',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  success: {
    DEFAULT: '#4CAF50',
    light: '#66BB6A',
    dark: '#388E3C',
  },
  error: {
    DEFAULT: '#F44336',
    light: '#EF5350',
    dark: '#D32F2F',
  },
};

export const fonts = {
  sans: ['var(--font-inter)', 'sans-serif'],
  heading: ['var(--font-montserrat)', 'sans-serif'],
};

export const spacing = {
  container: '1280px', // Aumentando um pouco a largura máxima
};

export default {
  colors,
  fonts,
  spacing,
}; 