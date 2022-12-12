// Generate new token at https://developer.spotify.com/console/get-track/
import SpotifyWebApi from 'spotify-web-api-node'
import type { Response } from 'express'
import fs from 'fs'
import tracks from './tracks.json'
import type { Track, Artist } from '../types/tracks'

interface TracksResponse extends Response {
  body: { tracks: Track[] }
}

interface ArtistsResponse extends Response {
  body: { artists: Artist[] }
}

const { SPOTIFY_ACCESS_TOKEN: spotifyAccessToken } = process.env

const spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(spotifyAccessToken)

const trackIds = Object.values(tracks.data)
const filePath = 'app/data/'
function writeFile(fileName: string, data: TracksResponse | ArtistsResponse) {
  if (!fs.existsSync(filePath)) fs.mkdirSync(filePath) // create directory if it doesn't exist
  fs.writeFileSync(`${filePath}${fileName}`, JSON.stringify(data.body))
}

spotifyApi
  .getTracks(trackIds)
  .then((tracksData: TracksResponse) => {
    writeFile('tracks.json', tracksData)
    const artistsIds = tracksData.body.tracks.map(({ artists }) => {
      return artists[0].id
    })
    return spotifyApi.getArtists(artistsIds)
  })
  .then((artistsData: ArtistsResponse) => {
    writeFile('artists.json', artistsData)
  })
  .catch((error: string) => {
    throw new Error(error)
  })
