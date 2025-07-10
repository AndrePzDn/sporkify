import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginSchema, type LoginSchemaType } from "../../schemas/login.schema";
import Button from "../atoms/Button";
import LoginFormFields from "../molecules/LoginFormFields";
import FormTemplate from "../templates/FormTemplate";
import { auth } from "../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import LoginProviders from "../molecules/LoginProviders";
import { useAuthStore } from "../../stores/AuthStore";

export default function LoginForm() {
  const navigate = useNavigate();
  const { loginAndRedirect } = useAuthStore();

  const onSubmit = async (data: LoginSchemaType) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        loginAndRedirect(userCredential, navigate);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <article className="bg-[#121212] w-1/3 sm:3/4 md:w-1/2 rounded-md text-white justify-center">
      <section className="flex flex-col items-center justify-center p-16 gap-4 w-full sm:w-2/3 md:w-1/2 mx-auto">
        <h1 className="text-3xl font-bold">Log in to Sporkify</h1>
        <LoginProviders />
        <div className="w-full h-px bg-white/20 my-4" />
        <FormTemplate
          formId="login-form"
          schema={LoginSchema}
          onSubmit={onSubmit}
        >
          <LoginFormFields />
        </FormTemplate>
        <Button
          variant="primary"
          text="Log in"
          type="submit"
          form="login-form"
        />
        <p className="text-white/70">
          Don't have an account?{" "}
          <a
            className="text-white underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up for Sporkify
          </a>
        </p>
      </section>
    </article>
  );
}
