export class SongModel {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;

  constructor(id: string, title: string, artist: string, audioUrl: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.audioUrl = audioUrl;
  }
}
