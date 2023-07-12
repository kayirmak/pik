import { RouterProvider } from 'react-router';
import MainPage from './pages/MainPage';

import router from './router/router';

import './App.css'

function App() {

  return (
    <RouterProvider router={router}>
      <div className="App">
        <MainPage />
      </div>
    </RouterProvider>
  )
}

export default App
