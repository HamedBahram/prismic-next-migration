/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem'
      }
    },
    fontFamily: {
      copy: ['var(--font-copy)'],
      headings: ['var(--font-headings)'],
      mono: ['var(--font-mono)']
    },
    fontSize: {
      'xs-flat': ['0.75rem', 1], // 12px/12px
      xs: ['0.75rem', 1.5], // 12px/18px
      'sm-flat': ['0.875rem', 1], // 14px/14px
      sm: ['0.875rem', 1.142], // 14px/16px
      'base-flat': ['1rem', 1], // 16px/16px
      'base-tight': ['1rem', 1.375], // 16px/22px
      base: ['1rem', 1.5], // 16px/24px
      'md-tight': ['1.125rem', 1.333], // 18px/24px
      md: ['1.125rem', 1.555], // 18px/28px
      lg: ['1.25rem', 1.3], // 20px/26px
      'xl-tight': ['1.375rem', 1.272], // 22px/28px
      xl: ['1.375rem', 1.454], // 22px/32px
      '2xl-tight': ['1.5rem', 1.25], // 24px/30px
      '2xl': ['1.5rem', 1.5], // 24px/36px
      '3xl-tight': ['1.75rem', 1.142], // 28px/32px
      '3xl': ['1.75rem', 1.5], // 28px/42px
      '4xl': ['2rem', 1.125], // 32px/36px
      '5xl': ['2.5rem', 1.1], // 40px/44px
      '6xl': ['3rem', 1.083], // 48px/52px
      '7xl': ['3.5rem', 1.142], // 56px/64px
      '8xl': ['4rem', 1.125] // 64px/72px
    },
    colors: {
      primary: {
        orange: '#ED6B22',
        pink: '#F97289',
        green: '#3BBB96',
        purple: '#8E44EC',
        blue: '#59B5F8'
      },
      secondary: {
        orange: '#F39A68',
        pink: '#F7A1B0',
        green: '#75DCC0',
        purple: '#B382F2',
        blue: '#87D9FD'
      },
      tertiary: {
        orange: '#FCDAC4',
        pink: '#FFD6DE',
        green: '#D4F2E9',
        purple: '#E8C7FF',
        blue: '#C3EEFE'
      },
      quaternary: {
        orange: '#FEF1E9',
        pink: '#FFE5EA',
        green: '#D4F2E9',
        purple: '#F5E6FF',
        blue: '#E6F7FE'
      },
      gray: {
        15: '#151515',
        '1F': '#1F1F1F',
        30: '#303030',
        50: '#505050',
        A4: '#A4A4A4',
        EE: '#EEEEEE',
        F7: '#F7F7F7'
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent'
    },
    extend: {
      screens: {
        '2xl': '1441px',
        '3xl': '1920px'
      },
      boxShadow: {
        'image-fix': 'inset 0 0 0 1px rgba(21, 21, 21, 1)',
        'step-swiper-dark':
          '344px 0 0 rgba(31, 31, 31, 1), 688px 0 0 rgba(31, 31, 31, 1), 1032px 0 0 rgba(31, 31, 31, 1)',
        'step-swiper-light':
          '344px 0 0 rgba(247, 247, 247, 1), 688px 0 0 rgba(247, 247, 247, 1), 1032px 0 0 rgba(247, 247, 247, 1)',
        'website-screenshot': 'inset 0 0 40px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
}
