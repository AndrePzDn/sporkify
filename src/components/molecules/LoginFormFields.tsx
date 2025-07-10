import { useFormContext } from "react-hook-form";
import type { LoginSchemaType } from "../../schemas/login.schema";
import FormTextInput from "../atoms/FormTextInput";

export default function LoginFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginSchemaType>();

  return (
    <div className="flex flex-col gap-2">
      <FormTextInput
        legend="Email"
        name="email"
        register={register}
        placeholder="Enter your email"
        error={errors.email}
        required
      />
      <FormTextInput
        legend="Password"
        name="password"
        register={register}
        placeholder="Enter your password"
        error={errors.password}
        type="password"
        required
      />
    </div>
  );
}
