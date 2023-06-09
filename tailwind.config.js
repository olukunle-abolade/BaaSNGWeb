/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/view/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      colors: {
        kprimary: '#210590',
        kblackCom: '#0D0D0D',
        kblack2: '#697A8D',
        n40: '#DEDEDE',
        n50: '#BFBFBF',
        n60: '#B0B0B0',
        n80: '#949494',
        n100: '#757575',
        n200: '#666666',
        n400: '#4A4A4A',
        n600: '#2E2E2E',
        n800: '#0D0D0D',
        p50: '#E9E6F4',
        p100: '#7E6EBF',
        p200: '#4730A3',
        p400: '#170465',
        gray900: '#101828',
        kgreen: '#12B76A',
        kred: '#F04438',
        kyellow: '#F79009',
        kpsec: 'rgba(33, 5, 144, 0.05)',
        kgsec: 'rgba(18, 183, 106, 0.05)',
        krsec: 'rgba(240, 68, 56, 0.05)',
        kysec: 'rgba(247, 144, 9, 0.05)',
        kpshadow: '0px 4px 10px rgba(174, 173, 173, 0.03)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
