import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Popular from '../Popular/Popular';
import Battle from '../Battle/Battle';
import Result from '../Battle/Result';
// import './App.css';

const router = createBrowserRouter([
    {
        element: <Nav />,
        children: [
            {
                path: '/',
                element: <Home />,
                // errorElement: <ErrorPage />,
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
                path: '/battle/results',
                element: <Result />,
            },
            // {
            //     path: '/*',
            //     element: <ErrorPage />,
            // },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
