import { LinearProgress } from '@material-ui/core'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import firebase from './components/modules/firebaseConfig'

const ABlue = lazy(() => import('./components/Calculator'))

const App = () => {
  /**
   * On Mount
   */
  useEffect(() => {
    getFirebaseToken()
  }, [])

  /**
   * Firebase init
   */
  const getFirebaseToken = async () => {
    const message = firebase.messaging()
    const token = await message.getToken()

    console.log('Firebase Token:', token)
  }

  /**
   * Render
   */
  return (
    <BrowserRouter>
      <Suspense fallback={() => <LinearProgress />}>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/' component={ABlue} />
          {/* <Route path='/ablue' component={ABlue} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
