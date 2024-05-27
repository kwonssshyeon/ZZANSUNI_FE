import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXXl = '1.5rem'; // 24px
const fontSizeXl = '1.25rem'; // 20px
const fontSizeLg = '1.175rem'; //18px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

//color 정의
const colorWhite = '#FFFFFF';
const colorGreen01 = '#5CC6BA';
const colorGreen02 = '#53E6AF';
const colorGreen03 = '#5498C7';
const colorGreen04 = '#103955';
const colorGreen05 = '#457A82';
const colorGreen06 = '#F0F4F3';
const colorGrey01 = '#797979';
const colorGrey02 = '#B8B8B8';




export const GlobalStyle = css`
    :root {
        --font-size-xxl: ${fontSizeXXl};
        --font-size-xl: ${fontSizeXl};
        --font-size-lg: ${fontSizeLg};
        --font-size-md: ${fontSizeMd};
        --font-size-sm: ${fontSizeSm};
        --font-size-xs: ${fontSizeXs};

        --color-white: ${colorWhite};
        --color-green-01: ${colorGreen01};
        --color-green-02: ${colorGreen02};
        --color-green-03: ${colorGreen03};
        --color-green-04: ${colorGreen04};
        --color-green-05: ${colorGreen05};
        --color-green-06: ${colorGreen06};
        --color-grey-01: ${colorGrey01};
        --color-grey-02: ${colorGrey02};
        
    }
`;