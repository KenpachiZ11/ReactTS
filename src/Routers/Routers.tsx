import { createBrowserRouter } from 'react-router-dom';


import App from '../App';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import MainPage from '../Pages/MainPage/MainPage';
import ContactsPage from '../Pages/ContactsPage/ContactsPage';
import TodoPage from '../Pages/TodoPage/TodoPage';
import ComPage from '../Pages/ComPage/ComPage';
import ShopPage from '../Pages/ShopPage/ShopPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/shop',
                element: <ShopPage />
            },
            {
                path: '/todoItem',
                element: <TodoPage />
            },
            {
                path: '/comments',
                element: <ComPage />
            },
            {
                path: '/contacts',
                element: <ContactsPage />
            },
        ]
    },
]);

export default router;