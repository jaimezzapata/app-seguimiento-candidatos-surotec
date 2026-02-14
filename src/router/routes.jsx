import Login from '../pages/layouts/Login'
import Offers from '../pages/layouts/Offers'
import Candidates from '../pages/layouts/Candidates'
import Applications from '../pages/layouts/Applications'
import Users from '../pages/layouts/Users'
export let router = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/offers",
        element: <Offers />
    },
    {
        path: "/candidates",
        element: <Candidates />
    },
    {
        path: "/applications",
        element: <Applications />
    },
    {
        path: "/users",
        element: <Users />
    }
]