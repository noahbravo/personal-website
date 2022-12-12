import { useMemo } from 'react'
import { useWindowSize } from './useWindowSize'

export function useScreenWidths() {
  const { width } = useWindowSize()

  const screenWidths = useMemo(
    () => ({
      phoneOnly: width < 480,
      phoneUp: width >= 480,
      laptopUp: width >= 1024,
      desktopUp: width >= 1280,
      bigDesktopUp: width >= 1536
    }),
    [width]
  )

  return screenWidths
}
