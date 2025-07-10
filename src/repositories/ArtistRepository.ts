import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDatabase } from "../utils/Firebase";
import type { ArtistSchemaType } from "../schemas/artist.schema";
import type { ArtistModel } from "../models/ArtistModel";

export class ArtistRepository {
  collectionName = "artists";

  private getCollection() {
    return collection(firebaseDatabase, this.collectionName);
  }

  createArtist(artist: ArtistSchemaType): Promise<boolean> {
    const collectionRef = this.getCollection();

    return new Promise((res, rej) => {
      setDoc(doc(collectionRef), artist)
        .then(() => {
          console.log("Artist created successfully");
          res(true);
        })
        .catch((error) => {
          console.error("Error creating artist:", error);
          rej(false);
        });
    });
  }

  readArtists(): Promise<ArtistModel[]> {
    return new Promise((res, rej) => {
      getDocs(this.getCollection())
        .then((docs) => {
          const artists: ArtistModel[] = [];
          docs.forEach((doc) => {
            artists.push({ ...doc.data(), id: doc.id } as ArtistModel);
          });
          res(artists);
        })
        .catch((error) => {
          console.error("Error reading artists:", error);
          rej(error);
        });
    });
  }

  readArtist(artistId: string): Promise<ArtistSchemaType | null> {
    return new Promise((res, rej) => {
      getDoc(doc(firebaseDatabase, this.collectionName, artistId))
        .then((doc) => {
          if (doc.exists()) {
            res(doc.data() as ArtistSchemaType);
          } else {
            res(null);
          }
        })
        .catch((error) => {
          rej(error);
        });
    });
  }

  readArtistByGenre(genreId: string): Promise<ArtistModel[]> {
    return new Promise((res, rej) => {
      getDocs(this.getCollection())
        .then((docs) => {
          const artists: ArtistModel[] = [];
          docs.forEach((doc) => {
            const data = doc.data() as ArtistModel;
            if (data.genre === genreId) {
              artists.push({ ...data, id: doc.id });
            }
          });
          res(artists);
        })
        .catch((error) => {
          console.error("Error reading artists by genre:", error);
          rej(error);
        });
    });
  }
}
