import type { LoaderFunction } from '@remix-run/node'
import type { AlbumData } from '~/types/albums'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getAlbums } from '~/utils/helpers'
import { useAnimations, useCreateImageInteraction } from '~/utils/hooks'
import { Home } from '~/ui/screens'

export const loader: LoaderFunction = async () => {
  const albums = getAlbums() as AlbumData[]
  return json(albums)
}

const Index = () => {
  const albums = useLoaderData()
  const animations = useAnimations()
  const { createImageInteraction } = useCreateImageInteraction()

  return <Home albums={albums} {...animations} createImageInteraction={createImageInteraction} />
}

export default Index
