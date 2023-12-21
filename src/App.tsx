import { AuthProvider } from './context/AuthProvider';
import { GlobalAlertDataProvider } from './context/GlobalAlertData';
import { MobileProvider } from './context/Mobile';
import { ThemeProvider } from './context/Theme';
import RoutesComponent from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <ThemeProvider>
      <MobileProvider>
        <GlobalAlertDataProvider>
          <AuthProvider>
            <>
              <RoutesComponent />
              <GlobalStyle /></>
             
          </AuthProvider>
        </GlobalAlertDataProvider>
      </MobileProvider>
    </ThemeProvider>
  );
};

export default App
