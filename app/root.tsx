import type {
  MetaFunction,
  LinksFunction,
  HtmlMetaDescriptor,
  LinkDescriptor
} from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { meta as rootMeta, links as rootLinks } from '~/utils/root'
import { globalStyles } from '~/styles'

export const meta: MetaFunction = () => rootMeta as HtmlMetaDescriptor
export const links: LinksFunction = () => rootLinks as LinkDescriptor[]

const App = () => {
  globalStyles()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV !== 'development' && (
          <script
            async
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date())
              gtag('config', 'UA-140490331-1');
            `
            }}
          />
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
