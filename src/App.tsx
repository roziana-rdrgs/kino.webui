import { AuthProvider } from './context/AuthProvider';
import { GlobalAlertDataProvider } from './context/GlobalAlertData';
import { MobileProvider } from './context/Mobile';
import { ThemeProvider } from './context/Theme';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './routes';
import GlobalStyle from './styles/global';
import { Login } from './pages/admin/login';

const App = () => {
  return (
    <ThemeProvider>
      <MobileProvider>
        <GlobalAlertDataProvider>
          <AuthProvider>
            <BrowserRouter>
              <RoutesComponent />
              <GlobalStyle />
              <Login />
            </BrowserRouter>
          </AuthProvider>
        </GlobalAlertDataProvider>
      </MobileProvider>
    </ThemeProvider>
  );
};

export default App
