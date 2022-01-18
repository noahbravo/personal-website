import dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'
import fs from 'fs'
import tracks from './tracks.json'

dotenv.config()
const spotifyAccessToken = process.env.SPOTIFY_ACCESS_TOKEN

const spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(spotifyAccessToken)

const trackIds = Object.values(tracks.data)
const filePath = './src/js/data/'
const writeFile = (fileName, data) =>
  fs.writeFileSync(`${filePath}${fileName}`, JSON.stringify(data.body))

spotifyApi
  .getTracks(trackIds)
  .then((tracksData) => {
    writeFile('tracks.json', tracksData)
    const artistsIds = tracksData.body.tracks.map(({ artists }) => {
      return artists[0].id
    })
    return spotifyApi.getArtists(artistsIds)
  })
  .then((artistsData) => {
    writeFile('artists.json', artistsData)
  })
  .catch((error) => {
    throw new Error(error)
  })
