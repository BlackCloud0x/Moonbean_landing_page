// Define common theme variables for consistent styling
const theme = {
  colors: {
    primary: {
      default: '#7c3aed',
      light: '#9a68fb',
      dark: '#5b21b6'
    },
    secondary: {
      default: '#0f172a',
      dark: '#0a0f1d'
    },
    text: {
      light: '#ffffff',
      dark: '#000000',
      muted: 'rgba(255, 255, 255, 0.7)'
    },
    accent: {
      yellow: '#fbbf24',
      blue: '#60a5fa',
      purple: '#a78bfa'
    },
    background: {
      gradient: 'radial-gradient(circle at 15% 50%, rgba(30, 41, 59, 0.7) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(30, 41, 59, 0.7) 0%, transparent 25%)'
    }
  },
  fonts: {
    primary: 'Inter, sans-serif'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  },
  animation: {
    transition: 'all 0.3s ease'
  }
};

// Make theme available globally for both script tags and module imports
if (typeof window !== 'undefined') {
  window.theme = theme;
}

// Support ES module imports
if (typeof module !== 'undefined') {
  module.exports = theme;
} 