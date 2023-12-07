import type { MetaFunction, LinksFunction, LinkDescriptor } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { meta as rootMeta, links as rootLinks } from '~/utils/root'
import { globalStyles } from '~/styles'

export const meta: MetaFunction = () => rootMeta
export const links: LinksFunction = () => rootLinks as LinkDescriptor[]

export default function App() {
  globalStyles()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
