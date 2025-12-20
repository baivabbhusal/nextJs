import { About_ROUTE, BLOGS_ROUTE, CONTACT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTER_ROUTE,ORDERS_ROUTE } from "./routes"

const Navlinks=[
    {
        route:HOME_ROUTE,
        label:"Home"
    },
    {
        route:About_ROUTE,
        label:"About"
    },
    {
        route:PRODUCT_ROUTE,
        label:"Products"
    },
    {
        route:CONTACT_ROUTE,
        label:"Contact"
    },
    {
    route: ORDERS_ROUTE,
    label: "Orders",
  },
    {
        route:BLOGS_ROUTE,
        label:"Blogs"
    },
    // {
    //     route:REGISTER_ROUTE,
    //     label:"Register"
    // }
]

export default Navlinks