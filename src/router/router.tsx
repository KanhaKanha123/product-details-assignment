import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../error-boundry/error-boundry';
import { Home } from '../pages/home/home-page';

export const router = createBrowserRouter([
    {
        element: <ErrorBoundary><Home /></ErrorBoundary>,
        path: ''
    }
]);