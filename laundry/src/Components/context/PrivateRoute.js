import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const auth = true ; 
  return auth ? children : <Navigate to={"/login"}/>
}
