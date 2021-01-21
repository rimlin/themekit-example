import React from 'react'
import { render } from 'react-dom'
import { configureRootTheme } from '@yandex/ui/Theme'

import 'styles/index.styl'
import { theme } from './theme'
import App from './config/App'
import reportWebVitals from './reportWebVitals'

configureRootTheme({ theme })

const rootElement = document.getElementById('root')
render(<App />, rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
