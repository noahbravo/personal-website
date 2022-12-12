export interface Content {
  name: string
  image: string
}

export interface AlbumData {
  id: string
  album: Content
  artist: Content
}

export interface Data {
  albums: AlbumData[]
}
