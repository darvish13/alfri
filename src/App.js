import { LinearProgress } from '@material-ui/core'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import firebase from './firebase'

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
    const token = await message.getToken({
      vapidKey:
        'BM6qlw0p5S4vAiwu8pZnc8FB5GxhjHLuoZ9h4rfx51aMH4Q9qw98zIDfWelPI7VH7x-wWVx4bs3k1izsj3Mj6yA',
    })

		console.clear()
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
