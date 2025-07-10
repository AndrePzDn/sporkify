import { useFormContext } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import FormFileInput from "../atoms/FormFileInput";
import type { SongSchemaType } from "../../schemas/song.schema";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function SongFormFields() {
  const { id } = useParams<{ id: string }>();

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<SongSchemaType>();

  useEffect(() => {
    if (!id) return;
    setValue("artist", id);
  }, [setValue, id]);

  return (
    <div className="flex flex-col gap-2">
      <FormTextInput
        register={register}
        legend="Song Title"
        name="title"
        placeholder="Enter song title"
        error={errors.title}
        required
      />
      <FormFileInput
        register={register}
        legend="Audio File"
        name="audioUrl"
        accept="audio/mp3"
        error={errors.audioUrl}
        required
      />
    </div>
  );
}
