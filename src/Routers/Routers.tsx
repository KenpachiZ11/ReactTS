import { createBrowserRouter } from 'react-router-dom';


import App from '../App';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import MainPage from '../Pages/MainPage/MainPage';
import ContactsPage from '../Pages/ContactsPage/ContactsPage';
import TodoPage from '../Pages/TodoPage/TodoPage';
import ComPage from '../Pages/ComPage/ComPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/main',
                element: <MainPage />
            },
            {
                path: '/contacts',
                element: <ContactsPage />
            },
            {
                path: '/todoItem',
                element: <TodoPage />
            },
            {
                path: '/comments',
                element: <ComPage />
            }
        ]
    },
]);

export default router;