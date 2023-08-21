import React from "react"
import { Link, Outlet,  } from "react-router-dom"


export default function ShopLayout() {
    return (
        <>
            <nav className="shop-items">
                <Link to="headphones">Headphones</Link>
                <Link to="earbuds">Earbuds</Link>
                <Link to="speakers">Speakers</Link>
                <Link to="accessories">Accessories</Link> 
            </nav>
           <Outlet/>
        </>
    )
}