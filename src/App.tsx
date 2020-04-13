import * as React from 'react'
import { Page } from 'react-figma'
import { ThemeProvider } from 'styled-components/primitives'
import theme from './styles/theme'

export const App = () => {
  return (
    <Page isCurrent name='Styled Components'>
      <ThemeProvider theme={theme}></ThemeProvider>
    </Page>
  )
}
