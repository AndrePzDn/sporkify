import { useFormContext } from "react-hook-form";
import type { ArtistSchemaType } from "../../schemas/artist.schema";
import FormTextInput from "../atoms/FormTextInput";
import FormFileInput from "../atoms/FormFileInput";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtistFormFields() {
  const { id } = useParams<{ id: string }>();

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<ArtistSchemaType>();

  useEffect(() => {
    if (!id) return;
    setValue("genre", id);
  }, [id, setValue]);

  return (
    <div className="flex flex-col gap-2">
      <FormTextInput
        legend="Artist Name"
        name="name"
        placeholder="Enter artist name"
        register={register}
        error={errors.name}
        required
      />
      <FormFileInput
        legend="Artist Image"
        name="image"
        register={register}
        accept="image/*"
        error={errors.image}
      />
    </div>
  );
}
