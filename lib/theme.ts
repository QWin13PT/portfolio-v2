export const theme = {
  colors: {
    light: {
      background: '#f5f5f5',
      backgroundLight: 'rgba(10, 10, 10, 0.1)',
      foreground: '#000000',
    },
    dark: {
      background: '#0a0a0a',
      backgroundLight: 'rgba(245, 245, 245, 0.1)',
      foreground: '#ffffff',
    },
    primary: '#4f4041',
    secondary: '#a3af9d',
    accent: '#f4c148',
  },
} as const;

export type Theme = typeof theme;

