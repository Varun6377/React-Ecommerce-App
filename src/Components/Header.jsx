import logo from "./skull.png"
import { Link, NavLink  } from "react-router-dom"
import { useSelector } from "react-redux"

function fakeLogOut() {
   localStorage.removeItem("loggedin")
  }

function Header(){
   const {cart} = useSelector((state)=> state.allCart)
   
   const activeStyles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
  }



  return (
    
  <header>
     <nav>
      <Link className="site-logo" to="/">
      <img src="https://i.ibb.co/60KfMQ5/skullcandy-logo-C3023-AA454-seeklogo-com.png" />
      </Link>
      <NavLink to="products"
      style={({isActive}) => isActive ? activeStyles : null}>Products</NavLink>
      <NavLink to="about"
      style={({isActive}) => isActive ? activeStyles : null}>About</NavLink>
      <NavLink to="cart"
      style={({isActive}) => isActive ? activeStyles : null}>Cart({cart.length})</NavLink>
      <NavLink to="login"
      style={({isActive}) => isActive ? activeStyles : null}>Login</NavLink>
             
             <div className="logout">  
       <button onClick={fakeLogOut}>
        Logout
       </button>
             </div>   
          
    </nav>
  
  
  </header>

  

  
  
  
 )
}

export default Header