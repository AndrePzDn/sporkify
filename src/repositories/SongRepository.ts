import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDatabase } from "../utils/Firebase";
import type { SongSchemaType } from "../schemas/song.schema";
import type { SongModel } from "../models/SongModel";

export class SongRepository {
  collectionName = "songs";

  private getCollection() {
    return collection(firebaseDatabase, this.collectionName);
  }

  createSong(song: SongSchemaType): Promise<boolean> {
    const collectionRef = this.getCollection();

    return new Promise((res, rej) => {
      setDoc(doc(collectionRef), song)
        .then(() => {
          console.log("Song created successfully");
          res(true);
        })
        .catch((error) => {
          console.error("Error creating song:", error);
          rej(false);
        });
    });
  }

  readSongs(): Promise<SongModel[]> {
    return new Promise((res, rej) => {
      getDocs(this.getCollection())
        .then((docs) => {
          const songs: SongModel[] = [];
          docs.forEach((doc) => {
            songs.push({ ...doc.data(), id: doc.id } as SongModel);
          });
          res(songs);
        })
        .catch((error) => {
          console.error("Error reading songs:", error);
          rej(error);
        });
    });
  }

  readSong(songId: string): Promise<SongSchemaType | null> {
    return new Promise((res, rej) => {
      getDoc(doc(firebaseDatabase, this.collectionName, songId))
        .then((doc) => {
          if (doc.exists()) {
            res(doc.data() as SongSchemaType);
          } else {
            res(null);
          }
        })
        .catch((error) => {
          rej(error);
        });
    });
  }

  readSongsByArtist(artistId: string): Promise<SongModel[]> {
    return new Promise((res, rej) => {
      getDocs(this.getCollection())
        .then((docs) => {
          const songs: SongModel[] = [];
          docs.forEach((doc) => {
            const songData = doc.data() as SongModel;
            if (songData.artist === artistId) {
              songs.push({ ...songData, id: doc.id });
            }
          });
          res(songs);
        })
        .catch((error) => {
          console.error("Error reading songs by artist:", error);
          rej(error);
        });
    });
  }
}
