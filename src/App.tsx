import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import ArtistPage from "./pages/ArtistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignInPage />}></Route>
        <Route element={<AuthenticatedRoutes />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/genre/:id" element={<GenrePage />}></Route>
          <Route path="/artist/:id" element={<ArtistPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
