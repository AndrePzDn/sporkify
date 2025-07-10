import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDatabase } from "../utils/Firebase";
import type { GenreSchemaType } from "../schemas/genre.schema";
import type { GenreModel } from "../models/GenreModel";

export class GenreRepository {
  collectionName = "genres";

  private getCollection() {
    return collection(firebaseDatabase, this.collectionName);
  }

  createGenre(genre: GenreSchemaType): Promise<boolean> {
    const collectionRef = this.getCollection();
    console.log(genre);

    return new Promise((res, rej) => {
      setDoc(doc(collectionRef), genre)
        .then(() => {
          console.log("Genre created successfully");
          res(true);
        })
        .catch((error) => {
          console.error("Error creating genre:", error);
          rej(false);
        });
    });
  }

  readGenres(): Promise<GenreModel[]> {
    return new Promise((res, rej) => {
      getDocs(this.getCollection())
        .then((docs) => {
          const genres: GenreModel[] = [];
          docs.forEach((doc) => {
            genres.push({ ...doc.data(), id: doc.id } as GenreModel);
          });
          res(genres);
        })
        .catch((error) => {
          console.error("Error reading genres:", error);
          rej(error);
        });
    });
  }

  readGenre(genreId: string): Promise<GenreModel | null> {
    return new Promise((res, rej) => {
      getDoc(doc(firebaseDatabase, this.collectionName, genreId))
        .then((doc) => {
          if (doc.exists()) {
            res({ ...doc.data(), id: doc.id } as GenreModel);
          } else {
            res(null);
          }
        })
        .catch((error) => {
          rej(error);
        });
    });
  }
}
