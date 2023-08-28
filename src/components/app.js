import { h } from 'preact'
import { Router } from 'preact-router'

import Home from '../routes/home'
import GithubCorner from './GithubCorner'

function App() {
  return (
    <div id='app'>
      <main>
        <GithubCorner />
        <Router>
          <Home path='/' />
        </Router>
      </main>
    </div>
  )
}

export default App
