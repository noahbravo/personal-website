import tracksData from './data/tracks.json'
import artistsData from './data/artists.json'

export default function createAlbums() {
  const { width } = screen
  const screenWidths = {
    phoneOnly: width < 480,
    phoneUp: width >= 480,
    laptopUp: width >= 1024,
    desktopUp: width >= 1280,
    bigDesktopUp: width >= 1536
  }

  const albumLimit = 8
  const albumSection = document.querySelector('.inspiration__album__list')
  tracksData.tracks.forEach(({ album, artists }, index) => {
    if (
      (screenWidths.phoneOnly && index + 1 >= albumLimit) ||
      !screenWidths.phoneOnly
    ) {
      const { url: albumImgUrl } = album.images[1]
      const { id: artistId, name: artistName } = artists[0]
      const currentArtist = artistsData.artists.find(
        ({ id }) => id === artistId
      )
      const { url: artistImgUrl } = currentArtist.images[2]

      const albumElement = document.createElement('div')
      albumElement.classList.add('inspiration__album')
      const albumImg = document.createElement('img')
      albumImg.src = albumImgUrl
      albumElement.append(albumImg)

      const overlayElement = document.createElement('div')
      overlayElement.classList.add('inspiration__album__overlay')
      albumElement.append(overlayElement)

      const artistElement = document.createElement('div')
      artistElement.classList.add('inspiration__album__artist')

      const artistImg = document.createElement('img')
      artistImg.src = artistImgUrl
      artistImg.classList.add('inspiration__album__artist--img')
      artistElement.append(artistImg)

      const artistText = document.createElement('span')
      artistText.innerText = artistName
      artistText.classList.add('inspiration__album__artist--text')
      artistElement.append(artistText)

      albumElement.append(artistElement)
      albumSection.append(albumElement)
    }
  })
}
