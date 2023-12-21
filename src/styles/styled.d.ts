import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    isLightMode: boolean;

    colors: {
      white: string;
      black: string;
      gray50: string;
      gray100: string;
      gray150: string;
      gray200: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      cyan50: string;
      cyan300: string;
      cyan500: string;
      cyan800: string;
      gray900: string;
      red800: string;
      green200: string;
      green500: string;
      orange300: string;
      sideBar: string;
      warning500: string;
      alert700: string;
      grayCard: string;
      yellow: string;
      blue500: string;
    };
    text: {
      white: string;
      gray300: string;
      gray350: string;
      gray400: string;
      gray500: string;
      gray600: string;
      grayInactive: string;
      cyan300: string;
      cyan500: string;
      cyan950: string;
      green500: string;
      red: string;
    };
    button: {
      primary: {
        backgroundColor: string;
        border: string;
        hover: string;
        click: string;
        color: string;
      };
      secondary: {
        backgroundColor: string;
        hover: string;
        click: string;
        color: string;
        border: string;
      };
      third: {
        backgroundColor: string;
        hover: string;
        click: string;
        color: string;
        border: string;
      };
      outlined: {
        backgroundColor: string;
        color: string;
        border: string;
      };
      disabled: {
        backgroundColor: string;
      };
      loading: {
        backgroundColor: string;
        color: string;
        border: string;
      };
      cancel: {
        backgroundColor: string;
        hover: string;
        click: string;
        color: string;
        border: string;
      };
    };
  }
}
