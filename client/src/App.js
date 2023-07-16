import './App.css';
import Home from './pages/Home'
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
