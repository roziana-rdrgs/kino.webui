
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "../pages/admin/login";

const RoutesComponent: React.FC = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
  
      </Routes>
    </BrowserRouter>
);

export default RoutesComponent;