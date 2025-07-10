export const uploadFile = async (data: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", data);
  formData.append("upload_preset", "sporkify");
  formData.append("folder", `sporkify/`);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dukvepng7/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();

    if (response.ok) {
      return result.secure_url;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
