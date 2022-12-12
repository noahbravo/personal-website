import artistsData from '~/data/artists.json'
import tracksData from '~/data/tracks.json'

export function getAlbums() {
  const albums = tracksData.tracks.map(({ album, artists }) => {
    const { id, images: covers, name: albumName } = album
    const { id: artistId, name: artistName } = artists[0]
    const albumArtist = artistsData.artists.find(({ id }) => id === artistId)

    return {
      id,
      album: {
        name: albumName,
        image: covers[1].url
      },
      artist: {
        name: artistName,
        image: albumArtist?.images[2].url
      }
    }
  })

  return albums
}
