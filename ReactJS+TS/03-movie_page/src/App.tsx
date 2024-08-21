// src/App.tsx
import './styles/global.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NowPlaying from './pages/NowPlaying'
import Popular from './pages/Popular'
import TvShows from './pages/TvShows'
import Movies from './pages/Movies'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='now_playing' element={<NowPlaying />}/>
        <Route path='popular' element={<Popular />}/>
        <Route path='movies' element={<Movies />}/>
        <Route path='tv_shows' element={<TvShows />}/>
      </Routes>
    </>
  )
}

export default App
