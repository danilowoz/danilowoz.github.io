import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'

import { LayoutContext } from './LayoutContext'
import * as T from './typography'

const GlobalStyle = createGlobalStyle`
 ${reset}
 ${T.globalStyle}

 :root {
    --mainFont: Source Sans Pro, sans-serif;
    --mainFontHeading: Merriweather, serif;

    --transitionCubic: all cubic-bezier(0.19, 1, 0.22, 1) 400ms;
    --transitionEase: all ease-in-out 400ms;

    --shadow: 0 4px 18px rgba(0, 0, 0, 0.12), 0 5px 5px rgba(0, 0, 0, 0.12);
    --bordeRadius: 6px;
  }
`

const Variables = styled.div`
  --body: ${({ vars }) => vars.body};
  --main: ${({ vars }) => vars.main};
  --foreground: ${({ vars }) => vars.foreground};
  --background: ${({ vars }) => vars.background};
  --hover: ${({ vars }) => vars.hover};
  --card: ${({ vars }) => vars.card};

  background: var(--body);
  transition: var(--transitionEase);
`

const Layout = ({ children }) => {
  const { currentVariables } = React.useContext(LayoutContext)

  return (
    <Variables vars={currentVariables}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather|Source+Sans+Pro:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </Variables>
  )
}

export default Layout