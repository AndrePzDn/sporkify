import { GenreRepository } from "../../repositories/GenreRepository";
import { GenreSchema, type GenreSchemaType } from "../../schemas/genre.schema";
import { uploadFile } from "../../utils/cloudinary";
import GenreFormFields from "../molecules/GenreFormFields";
import FormTemplate from "../templates/FormTemplate";

export default function GenreForm() {
  const onSubmit = async (data: GenreSchemaType) => {
    console.log("Genre submitted:", data);
    const fileUrl = await uploadFile(data.image[0]);
    const genreRepository = new GenreRepository();
    await genreRepository
      .createGenre({ ...data, image: fileUrl })
      .then(() => {
        console.log("Genre created successfully");
      })
      .catch((error) => {
        console.error("Error creating genre:", error);
      });
  };

  return (
    <FormTemplate formId="genre-form" schema={GenreSchema} onSubmit={onSubmit}>
      <GenreFormFields />
    </FormTemplate>
  );
}
