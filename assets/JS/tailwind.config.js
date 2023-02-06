tailwind.config = {
  theme: {
    screens: {
      xxsm: "280px",
      xsm: "450px",
      xssm: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1300px",
      "2xl": "1536px",
      "5xl": "1700px",
      "6xl": "1800px",
    },
    borderRadius: {
      xsm: "8px",
      sm: "10px",
      md: "12px",
      lg: "18px",
    },
    maxWidth: {
      140: "140px",
      156: "156px",
      157: "157px",
      170: "170px",
      175: "175px",
      177: "177px",
      180: "180px",
      181: "181px",
      183: "183px",
      186: "186px",
      190: "190px",
      200: "200px",
      209: "209px",
      231: "231px",
      259: "259px",
      277: "277px",
      370: "370px",
      120: "120px",
      155: "155px",
      158: "158px",
      160: "160px",
      166: "166px",
      234: "234px",
      263: "263px",
      308: "308px",
      325: "325px",
      363: "363px",
      364: "364px",
      450: "450px",
      514: "514px",
      550: "550px",
      648: "648px",
      650: "650px",
      672: "672px",
      783: "783px",
      1029: "1029px",
      1189: "1189px",
    },
    lineHeight: {
      40: "40px",
      60: "60px",
    },
    extend: {
      width: {
        "w-37": "140px",
      },
      height: {
        "h-37": "140px",
      },
      colors: {
        "dark-700": "#282828",
        "dark-500": "#212529",
        "dark-600": "#000",
        "dark-800": "#21325b",

        "gray-400": "#606b7b",
        "gray-50": "#edf0f182",
        "gray-600": "#aaa",
        "gray-300": "#dcdcdc",
        "gray-350": "#e1e1e1",
        "gray-200": "b1b1b1",
        "gray-100": "rgba(119, 123, 179, 0.1)",
        "gray-70": "#cbcbcb",
        "fb-color": "#1877F2",
        "red-200": "rgba(252, 73, 11, 0.1)",
        "red-300": "rgba(223, 46, 49, 0.1)",
        "red-400": "#ffebe7",
        "red-500": "#ede3e9",
        "red-550": "#e60023",
        "red-600": "#e9485e",
        "red-700": "#f72585",
        "red-800": "#fe0000",
        "red-900": "#fe0000",
        "blue-50": "rgba(90, 218, 253, 0.1)",
        "blue-200": "rgba(33, 150, 243, 0.1)",
        "blue-500": "#62d6f3",
        "blue-550": "#98c1d9",
        "blue-800": "#7209b7",
        "blue-100": "rgba(94, 59, 127, 0.1)",
        "blue-300": "rgba(21, 114, 183, 0.1)",
        "blue-350": "#0c64c5",
        "blue-370": "#1d9bf0",
        "blue-400": " rgba(76, 167, 204, 0.1)",
        "blue-600": " #f8f7ff",
        "blue-700": "#3d69ff",
        "blue-900": "#3d5a80",
        "skyblue-700": "#4361ee",
        "yellow-100": "rgba(222, 142, 47, 0.1)",
        "yellow-200": "rgba(224, 198, 0, 0.1)",
        "yellow-300": "rgba(255, 232, 114, 0.15)",
        "yellow-400": "#fffcf2",
        "yellow-500": "#fefee3",
        "yellow-600": "#ffc000",
        "green-500": "#18b99b",
        "green-600": "#f3fcf0",
        "green-200": "rgba(65, 184, 131, 0.1)",
        "green-100": "rgba(101, 184, 74, 0.1)",
        "green-150": " rgba(152, 219, 124, 0.15)",
        "green-50": "rgba(89, 217, 107, 0.15)",
        "pink-500": "#ff8110",
        "cyan-400": "#e0fbfc",
        "pink-400": "#ee6c4d",
      },
      boxShadow: {
        "2xl": " 0px 20px 40px rgba(33, 37, 41, 0.08)",
        "22xl": " 0px 20px 40px rgba(33, 37, 41, 0.08)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      dropShadow: {
        "22xl": "drop-shadow(0px 20px 40px rgba(33, 37, 41, 0.08))",
        "23xl": "drop-shadow(0px 20px 60px rgba(33, 37, 41, 0.08))",
      },

      fontSize: {
        13: "13px",
        24: "24px",
        40: "40px",
        16: ["16px", "24px"],
        18: ["18px", "27px"],
        19: "19px",
        21: ["21px", "31.5px"],
        28: "28px",
        base: "2rem",
        xl: "1.25rem",
        xxl: "1.563rem",
        56: ["56px", "67.2px"],
        "3xl": ["1.875rem", "inherit"],
        sm: ["14px", "24px"],
      },
      spacing: {
        1.6: "7px",
        1.7: "9px",
        1.8: "8px",
        2.6: "11px",
        2.7: "12.1px",

        3.4: "13px",
        3.6: "15px",
        3.7: "15.6px",
        3.9: "17px",
        4.5: "19px",
        4.8: "18px",

        4.1: "22px",
        4.2: "22.6px",
        4.3: "21px",
        4.4: "23px",

        4.6: "20px",
        4.7: "25px",
        5.1: "26.5px",
        5.2: "27px",
        5.4: "28px",
        4.8: "31px",
        4.9: "29px",
        5.3: "30px",
        5.5: "26px",
        5.9: "32px",
        5.6: "33px",
        5.7: "34px",
        5.8: "35px",
        6.2: "36px",
        // 7.5: "29px",
        9.5: "37px",
        9.6: "39px",
        9.7: "38px",
        9.8: "40px",
        9.9: "45px",
        12.1: "41px",
        12.2: "43px",
        12.4: "48px",
        12.5: "49px",
        12.6: "50px",
        13: "51px",
        13.2: "52px",
        13.1: "54px",

        14.5: "56px",
        14.1: "57px",
        14.2: "58px",
        14.6: "59px",
        14.7: "60px",
        14.8: "61px",
        14.9: "59px",
        16.4: "64px",
        16.5: "65px",
        16.6: "68px",
        16.7: "66px",
        17: "70px",
        17.5: "71px",
        17.4: "72.72px",
        17.1: "74.78px",
        17.2: "76.78px",
        17.3: "80px",
        19.6: "81px",
        19.7: "82px",
        21: "clamp(40px,4vw,88px)",
        20.1: "87px",
        22: "90px",
        22.1: "92px",
        24.1: "100px",
        24.2: "102px",
        24.5: "110px",
        24.6: "112px",
        28.4: "115px",
        28.5: "116px",
        28.8: "100px",
        29: "123px",
        30: "126px",
        30.3: "130px",
        30.4: "131px",
        35.1: "144px",
        36.1: "146px",
        36.2: "147px",
        38.4: "154px",
        38.5: "156px",
        38.7: "160px",
        38.9: "168px",
        44.1: "180px",
        44.2: "200px",
        70: "277px",

        100: "100px",
        // 126: "126px",
        128: "128px",

        136: "136px",
        138: "138px",
        "280px": "280px",
        410: "410px",
        424: "424px",
        527: "527px",

        1320: "1320px",

        "27.99%": "27.99%",
        "32%": "32%",
        "34%": "34%",
        "39%": "39%",
        "40%": "40%",
        "45%": "45%",
        "43.99%": "43.99%",
        "44.99%": "44.99%",
        "46.36%": "46.36%",
        "50%": "50%",
        "9.80%": "9.80%",
        "68.75%": "68.75%",
        "69.44%": "69.44%",
      },
    },
  },
};
