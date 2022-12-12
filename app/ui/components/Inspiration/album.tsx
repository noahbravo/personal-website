import type { AlbumData } from '~/types/albums'
import { Box, Img, Flex, Text } from '~/ui/primitives'

const Album = ({ album, artist }: AlbumData) => {
  const { name: albumName, image: cover } = album
  const { name: artistName, image: artistImage } = artist

  return (
    <Box
      className="album"
      position="absolute"
      size={{ xs: 150, sm: 200, lg: 250 }}
      opacity="0"
      visibility="invisible"
    >
      <Img src={cover} alt={albumName} />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="33%"
        background="linear-gradient(180deg,transparent,rgba(0,0,0,.895))"
      />
      <Flex align="center" position="absolute" bottom="0" left="0" paddingX={16} paddingBottom={16}>
        <Img src={artistImage} alt={artistName} size={30} marginRight={8} borderRadius="50%" />
        <Text fontSize="sm">{artistName}</Text>
      </Flex>
    </Box>
  )
}

export default Album
