import { SongRepository } from "../../repositories/SongRepository";
import { SongSchema, type SongSchemaType } from "../../schemas/song.schema";
import { uploadFile } from "../../utils/cloudinary";
import SongFormFields from "../molecules/SongFormFields";
import FormTemplate from "../templates/FormTemplate";

export default function SongForm() {
  const onSubmit = async (data: SongSchemaType) => {
    console.log("Artist submitted:", data);
    const fileUrl = await uploadFile(data.audioUrl[0]);
    const songRepository = new SongRepository();
    await songRepository
      .createSong({ ...data, audioUrl: fileUrl })
      .then(() => {
        console.log("Artist created successfully");
      })
      .catch((error) => {
        console.error("Error creating artist:", error);
      });
  };

  return (
    <FormTemplate formId="song-form" schema={SongSchema} onSubmit={onSubmit}>
      <SongFormFields />
    </FormTemplate>
  );
}
