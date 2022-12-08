import { createBrowserRouter } from 'react-router-dom';
import Main from './../layouts/Main';
import Home from './../Components/Home';
import About from '../Components/About';
import Services from '../Components/Services';
import Portfolio from '../Components/Portfolio';
import Blog from './../Components/Blog';
import Contact from './../Components/Contact';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h3>page not found</h3>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])
