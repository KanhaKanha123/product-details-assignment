import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../error-boundry/error-boundry';
import { ProductDetailsPage, Home } from '../pages';

export const router = createBrowserRouter([
    {
        element: <ErrorBoundary><Home /></ErrorBoundary>,
        path: ''
    },
    {
        element: <ErrorBoundary><ProductDetailsPage /></ErrorBoundary>,
        path: '/product/:productId'
    }
]);