import { useFormContext } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import type { GenreSchemaType } from "../../schemas/genre.schema";
import FormFileInput from "../atoms/FormFileInput";

export default function GenreFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<GenreSchemaType>();

  return (
    <div className="flex flex-col gap-2">
      <FormTextInput
        legend="Genre Name"
        name="name"
        placeholder="Enter genre name"
        register={register}
        error={errors.name}
        required
      />
      <FormFileInput
        legend="Genre Image"
        name="image"
        register={register}
        error={errors.image}
        accept="image/*"
      />
    </div>
  );
}
