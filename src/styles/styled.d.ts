import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            poppins: string;
            cormorant: string;
            lato: string;
            plafair: string;

        },

        colors: {
            background: string;
            background2: string;
            textMenuNormal: string;
            backgroundBlack: string;
            backgroundBlue: string;
            backgroundClean: string;
            buttonSecondaryText: string;
            grayRelative: string;
            lineBlue: string;
            lineBlueLight: string;
            primary: string;
            primaryLigh: string;
            primaryOpacity: string;
            secondary: string;
            tertiary: string;
            textButton: string;
            textClean: string;
            textGray: string;
            textGrayActive: string;
            textGrayStrong: string;
            textGrayMedium: string;
            textGrayLight: string;
            textGrayMint: string;
            textGrayClean: string;
            textGolden: string;

        }

    }
}