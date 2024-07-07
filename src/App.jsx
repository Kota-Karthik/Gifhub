
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import Home from "./pages/home"
import Category from './pages/category'
import Favorites from './pages/favourites'
import Search from './pages/search'
import GifPage from './pages/single-gif'
import GifProvider from './context/gif-context'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
      {
        path: '/:type/:slug',
        element: <GifPage />,
      },
      {
        path: '/favourites',
        element: <Favorites />,
      },
    ]
  }
])

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  )

}

export default App
