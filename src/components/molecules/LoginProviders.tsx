import LoginProviderButton from "../atoms/LoginProviderButton";

import { facebookProvider, googleProvider } from "../../utils/Firebase";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export default function LoginProviders() {
  return (
    <section className="flex flex-col w-full gap-4">
      <LoginProviderButton
        provider={facebookProvider}
        text="Continue with Facebook"
        icon={<FaFacebook />}
      />
      <LoginProviderButton
        provider={googleProvider}
        text="Continue with Google"
        icon={<FaGoogle />}
      />
    </section>
  );
}
