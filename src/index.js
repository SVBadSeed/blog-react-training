import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import {store} from "./components/store"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Cabinet from "./components/routers/Cabinet"
import Main from "./components/routers/Main"
import Post from "./components/routers/Post"


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/cabinet',
                element: <Cabinet/>
            },
            {
                path: '/main',
                element: <Main/>,
            }, {
                path: '/post',
                element: <Post/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
