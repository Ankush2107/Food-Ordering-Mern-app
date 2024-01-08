import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import Menu from '../pages/shop/Menu';
import SignUp from '../components/SignUp';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <PrivateRouter><Menu/></PrivateRouter>
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
])

export default router;