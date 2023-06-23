import '@/styles/globals.scss'
import '@bynd-ui-library/react/dist/style.css';

import type { AppProps } from 'next/app'
import { ByndUIProvider, themes } from '@bynd-ui-library/react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ByndUIProvider theme={themes.baseTheme}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ByndUIProvider>
  )
}
