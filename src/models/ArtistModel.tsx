export class ArtistModel {
  id: string;
  name: string;
  genre: string;
  image: string;
  songs: string[];

  constructor(id: string, name: string, genre: string, image: string, songs: string[]) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.image = image;
    this.songs = songs;
  }
}
