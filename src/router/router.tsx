import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/home-page';

export const router = createBrowserRouter([
    {
        element: <Home />,
        path: ''
    }
]);