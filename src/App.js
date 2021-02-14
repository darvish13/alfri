import { LinearProgress } from '@material-ui/core'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const ABlue = lazy(() => import('./components/Calculator'))

const App = () => (
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

export default App
