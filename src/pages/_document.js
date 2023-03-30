import { Html, Head, Main, NextScript } from 'next/document'
import Contenido from '@/components/contenido'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Contenido />
        <NextScript />
      </body>
    </Html>
  )
}
