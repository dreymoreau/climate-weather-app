import './App.css';
import Home from './pages/Home'
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
