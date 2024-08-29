/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      hoves: ['TT Hoves Pro Trial', 'sans-serif'],
    },

    letterSpacing: {
      0.3: '0.0188rem', // 0.3px
      0.35: '0.022rem', // 0.35px
      0.4: '0.028rem', // 0.4px
      0.5: '0.0313rem', // 0.5px
      0.7: '0.044rem', // 0.7px
      1.5: '0.0938rem', // 1.5px
      2.4: '0.15rem', // 2.4px
      2.6: '0.163rem', // 2.6px
      3: '0.1875rem', // 3px
      3.84: '0.24rem', // 3.84px
      5: '0.3125rem', // 5px
    },

    borderRadius: {
      full: '9999px',
      4: '0.25rem', // 4px
      6: '0.375rem', // 6px
      8: '0.5rem', // 8px
      10: '0.625rem', // 10px
      12: '0.75rem', // 12px
      17: '1.0625rem', // 17px
    },

    extend: {

      backgroundImage: {
        'custom-gradient-r-to-l': 'linear-gradient(270deg, #FFF 12.06%, rgba(255, 255, 255, 0.00) 102.08%)',
        'custom-gradient-l-to-r': 'linear-gradient(90deg, #FFF 12.06%, rgba(255, 255, 255, 0.00) 102.08%)',
      },

      colors: {
        'gray-finance': '#56586866',
        'green-200': '#CDFF05',
        'white-100': '#F5F5F5',
        'black-200': '#090909',
        'black-300': '#1E1E1E',
        'black-400': '#2b2b2b',
        'black-500': '#111111',
        'gray-100': '#828597',
        'gray-110': '#a4a4a4',
        'gray-120': '#898989',
        'gray-130': '#3E3E3E',
        'gray-140': '#808080',
        'gray-150': '#595959',
        'gray-160': '#636363',
        'gray-170': '#7F8289',
        'gray-180': '#a5a5a5',
        'gray-190': '#555555',
      },

      padding: {
        6: '0.375rem', // 6px
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        15: '0.9375rem', // 15px
        18: '1.1rem', // 18px
        22: '1.375rem', // 22px
        24: '1.5rem', // 24px
        30: '1.875rem', // 30px
        31: '1.9375rem', // 31px
        39: '2.438rem', // 39px
        42: '2.625rem', // 42px
        52: '3.25rem', // 52px
        60: '3.75rem', // 60px
        62: '3.875rem', // 62px
        69: '4.3125rem', // 69px
        72: '4.5rem', // 72px
        80: '5rem', // 80px
        88: '5.5rem', // 88px
        98: '6.125rem', // 98px
        110: '6.875rem', // 110px
        132: '8.25rem', // 132px
        139: '8.688rem', // 139px
        143: '8.938rem', // 143px
        155: '9.688rem', // 155px
        166: '10.375rem', // 166px
      },

      margin: {
        10: '0.625rem', // 10px
        14: '0.875rem', // 14px
        25: '1.5625rem', // 25px
        29: '1.8125rem', // 29px
        30: '1.875rem', // 30px
        32: '2rem', // 32px
        34: '2.125rem', // 34px
        35: '2.1875rem', // 35px
        37: '2.3125rem', // 37px
        42: '2.625rem', // 42px
        43: '2.6875rem', // 43px
        45: '2.8125rem', // 45px
        48: '3rem', // 48px
        56: '3.5rem', // 56px
        54: '3.375rem', // 54px
        61: '3.8125rem', // 61px
        65: '4.0625rem', // 65px
        66: '4.125rem', // 66px
        72: '4.5rem', // 72px
        77: '4.8125rem', // 77px
        78: '4.875rem', // 78px
        88: '5.5rem', // 88px
        96: '6rem', // 96px
        143: '8.9375rem', // 143px
        146: '9.125rem', // 146px
        156: '9.75rem', // 156px
        154: '9.625rem', // 154px
        180: '11.25rem', // 180px
      },

      size: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        lg: '1.125rem', // 18px
        '2xl': '1.5rem', // 24px
        '4xl': '2.25rem', // 36px
        '5xl': '2.5rem', // 40px
        '6xl': '3.75rem', // 60px,
        12: '0.75rem', // 12px
        14: '0.875rem', // 14px
        18: '1.125rem', // 18px
        24: '1.5rem', // 24px
        26: '1.625rem', // 26px
        32: '2rem', // 32px
        36: '2.25rem', // 36px
        40: '2.5rem', // 40px
        60: '3.75rem', // 60px
      },

      width: {
        14: '0.875rem', // 14px
        18: '1.125rem', // 18px
        25: '1.5625rem', // 25px
        36: '2.25rem', // 36px
        40: '2.5rem', // 40px
        54: '3.375rem', // 54px
        58: '3.625rem', // 58px
        77: '4.8125rem', // 77px
        79: '4.9375rem', // 79px
        95: '5.9375rem', // 95px
        124: '7.75rem', // 124px
        142: '8.875rem', // 142px
        172: '10.75rem', // 172px
        180: '11.25rem', // 180px
        229: '14.3125rem', // 229px
        239: '14.9375rem', // 239px
        315: '19.6875rem', // 315px
        316: '19.75rem', // 316px
        325: '20.3125rem', // 325px
        330: '20.625rem', // 330px
        337: '21.0625rem', // 337px
        367: '22.9375rem', // 367px
        376: '23.5rem', // 376px
        401: '25.0625rem', // 401px
        453: '28.3125rem', // 453px
        497: '31.0625rem', // 497px
        557: '34.8125rem', // 557px
        593: '37.0625rem', // 593px
        612: '38.25rem', // 612px
        619: '38.6875rem', // 619px
        629: '39.3125rem', // 629px
        678: '42.375rem', // 678px
      },

      height: {
        14: '0.875rem', // 14px
        18: '1.125rem', // 18px
        22: '1.375rem', // 22px
        25: '1.5625rem', // 25px
        27: '1.6875rem', // 27px
        30: '1.875rem', // 30px
        36: '2.25rem', // 36px
        51: '3.1875rem', // 51px
        56: '3.5rem', // 56px
        73: '4.5625rem', // 73px
        94: '5.875rem', // 94px
        122: '7.625rem', // 122px
        148: '9.25rem', // 148px
        231: '14.4375rem', // 231px
        303: '18.9375rem', // 303px
        342: '21.375rem', // 342px
        351: '21.9375rem', // 351px
        365: '22.8125rem', // 365px
        404: '25.25rem', // 404px
        488: '30.5rem', // 488px
        560: '35rem', // 560px
        567: '35.4375rem', // 567px
      },

      maxWidth: {
        438: '27.375rem', // 438px
        1248: '78rem', // 1248px
        1292: '80.75rem', // 1292px
      },

      maxHeight: {
        1860: '116.25rem', // 1860px
      },

      inset: {
        45: '2.8125rem', // 45px
        58: '3.625rem', // 58px
        68: '4.25rem', // 68px
        104: '6.5rem', // 104px
        216: '13.5rem', // 216px
        217: '13.5625rem', // 217px
        263: '16.4375rem', // 263px
        2350: '146.875rem', // 2350px
      },

      gap: {
        4: '0.25rem', // 4px
        7: '0.4375rem', // 7px
        10: '0.625rem', // 10px
        14: '0.875rem', // 14px
        20: '1.25rem', // 20px
        24: '1.5rem', // 24px
        27: '1.6875rem', // 27px
        34: '2.125rem', // 34px
        40: '2.5rem', // 40px
        48: '3rem', // 48px
        120: '7.5rem', // 120px
      },

      lineHeight: {
        8: '0.5rem', // 8px
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        13: '0.8125rem', // 13px
        14: '0.875rem', // 14px
        15: '0.9375rem', // 15px
        16: '1rem', // 16px
        17: '1.0625rem', // 17px
        19: '1.1875rem', // 19px
        20: '1.25rem', // 20px
        24: '1.5rem', // 24px
        25: '1.5625rem', // 25px
        26.4: '1.65rem', // 26.4px
        28: '1.75rem', // 28px
        42: '2.625rem', // 42px
        43: '2.6875rem', // 43px
        46: '2.875rem', // 46px
        50: '3.125rem', // 50px
        51: '3.1875rem', // 51px
        54: '3.375rem', // 54px
        82: '5.125rem', // 82px
      },

      rotate: {
        3.414: '3.414deg',
        9.702: '9.702deg',
      },

      lineClamp: {
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-4': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        '.line-clamp-5': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '5',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
