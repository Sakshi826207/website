/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          surface: '#F8FAFC',
          surfaceHover: '#F1F5F9',
          lightBlue: '#F0F7FF',
          card: '#FFFFFF',
          border: '#E2E8F0',
          borderHighlight: '#CBD5E1',
          blueBorder: '#93C5FD',
          primaryNavy: '#0F172A',
          deepNavy: '#0B192C',
          textMain: '#0F172A',
          textMuted: '#475569',
          textDim: '#64748B',
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#EFF6FF',
          cyan: '#0EA5E9',
          cyanLight: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'premium': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 25px -5px rgba(37, 99, 235, 0.08), 0 8px 10px -6px rgba(37, 99, 235, 0.04)',
        'blue-glow': '0 0 20px -3px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.06) 1px, transparent 0)",
        'tech-dots': "radial-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px)",
        'circuit-pattern': "linear-gradient(to right, rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.05) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'trace-flow': 'traceFlow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        traceFlow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' }
        }
      }
    },
  },
  plugins: [],
}
