import { signInWithPopup, type AuthProvider } from "firebase/auth";
import Button from "./Button";
import type { ReactNode } from "react";
import { auth } from "../../utils/Firebase";
import { useAuthStore } from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import { UserRepository } from "../../repositories/UserRepository";

interface Props {
  provider: AuthProvider;
  text: string;
  icon: ReactNode;
}

export default function LoginProviderButton({ provider, text, icon }: Props) {
  const navigate = useNavigate();
  const { loginAndRedirect } = useAuthStore();

  const handleLogin = async () => {
    const userRepository = new UserRepository();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User logged in:", result.user);
        loginAndRedirect(result, navigate);
        userRepository.readUser(result.user.uid);
        if (result) {
          userRepository.createUser({
            id: result.user.uid,
            email: result.user.email || "",
            role: "user",
          });
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <Button
      variant="secondary"
      text={text}
      type="button"
      icon={icon}
      onClick={handleLogin}
    />
  );
}
