import { ArtistRepository } from "../../repositories/ArtistRepository";
import {
  ArtistSchema,
  type ArtistSchemaType,
} from "../../schemas/artist.schema";
import { uploadFile } from "../../utils/cloudinary";
import ArtistFormFields from "../molecules/ArtistFormFields";
import FormTemplate from "../templates/FormTemplate";

export default function ArtistForm() {
  const onSubmit = async (data: ArtistSchemaType) => {
    console.log("Artist submitted:", data);
    const fileUrl = await uploadFile(data.image[0]);
    const artistRepository = new ArtistRepository();
    await artistRepository
      .createArtist({ ...data, image: fileUrl })
      .then(() => {
        console.log("Artist created successfully");
      })
      .catch((error) => {
        console.error("Error creating artist:", error);
      });
  };

  return (
    <FormTemplate
      formId="artist-form"
      schema={ArtistSchema}
      onSubmit={onSubmit}
    >
      <ArtistFormFields />
    </FormTemplate>
  );
}
