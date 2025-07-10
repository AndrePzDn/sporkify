import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginSchema, type LoginSchemaType } from "../../schemas/login.schema";
import Button from "../atoms/Button";
import LoginFormFields from "../molecules/LoginFormFields";
import FormTemplate from "../templates/FormTemplate";
import { auth } from "../../utils/Firebase";
import { useNavigate } from "react-router-dom";
import LoginProviders from "../molecules/LoginProviders";
import { useAuthStore } from "../../stores/AuthStore";
import { UserRepository } from "../../repositories/UserRepository";

export default function SignInForm() {
  const navigate = useNavigate();
  const { loginAndRedirect } = useAuthStore();

  const onSubmit = async (data: LoginSchemaType) => {
    const userRepository = new UserRepository();

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        loginAndRedirect(userCredential, navigate);
        userRepository.createUser({
          id: userCredential.user.uid,
          email: userCredential.user.email || "",
          role: "user",
        });
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };
  return (
    <article className="bg-[#121212] w-1/3 sm:3/4 md:w-1/2 rounded-md text-white justify-center">
      <section className="flex flex-col items-center justify-center p-16 gap-4 w-full sm:w-2/3 md:w-1/2 mx-auto">
        <h1 className="text-3xl font-bold">Sign in to Sporkify</h1>
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
          text="Sign in"
          type="submit"
          form="login-form"
        />
        <p className="text-white/70">
          Already have an account?{" "}
          <a
            className="text-white underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in here
          </a>
        </p>
      </section>
    </article>
  );
}
