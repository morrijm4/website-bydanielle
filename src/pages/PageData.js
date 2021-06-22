//Pages
import Home from './home'
import Services from './services'
import Print from './print'
import Journal from './journal'
import Work from './work'

export const PageData = [
    {
        title: "Home",
        url: "/home",
        cName: "nav-links",
        component: Home
    },
    {
        title: "Services",
        url: "/services",
        cName: "nav-links",
        component: Services
    },
    {
        title: "Paper",
        url: "/print",
        cName: "nav-links",
        component: Print
    },
    {
        title: "Studio Talk",
        url: "/journal",
        cName: "nav-links",
        component: Journal
    },
    {
        title: "Portfolio",
        url: "/work",
        cName: "nav-links",
        component: Work
    },
]