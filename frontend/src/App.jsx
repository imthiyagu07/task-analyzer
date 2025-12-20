import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import useAuthStore from "./store/authStore";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const {user, checkAuth, isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to={"/"} />} />
        <Route path="/" element={user ? <Dashboard /> : <Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;