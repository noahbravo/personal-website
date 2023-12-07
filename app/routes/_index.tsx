import type { LoaderFunction } from '@remix-run/node'
import type { AlbumData } from '~/types/albums'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getAlbums } from '~/utils/helpers'
import { useAnimations, useCreateImageInteraction, useOnPageLoad } from '~/utils/hooks'
import { Home } from '~/ui/screens'

export function headers() {
  return {
    'Cache-Control': 'public, max-age=60, s-maxage=60'
  }
}

export const loader: LoaderFunction = async () => {
  const albums = getAlbums() as AlbumData[]
  return json(albums)
}

export default function Index() {
  const albums = useLoaderData<typeof loader>()
  const animations = useAnimations()
  const loaded = useOnPageLoad()
  const { createImageInteraction } = useCreateImageInteraction()

  return (
    <Home
      albums={albums}
      loaded={loaded}
      {...animations}
      createImageInteraction={createImageInteraction}
    />
  )
}
