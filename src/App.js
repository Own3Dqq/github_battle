import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage.js';
import './App.css';

const router = createBrowserRouter([
    {
        element: <Nav />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/popular',
                element: <Popular />,
            },
            {
                path: '/battle',
                element: <Battle />,
            },
            {
                path: '/*',
                element: <ErrorPage />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
