import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/AuthStore";
import { useCallback, useEffect } from "react";
import Header from "../components/molecules/Header";

export default function AuthenticatedRoutes() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleAuthState = useCallback(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    handleAuthState();
  }, [handleAuthState]);

  return (
    <main className="flex flex-col bg-gradient-to-b from-[#523ba0] to-[#1a1a1a] min-h-screen text-white">
      <Header />
      <section className="flex-1 flex p-4">
        <Outlet />
      </section>
    </main>
  );
}
