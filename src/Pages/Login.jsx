import React, { useState } from "react"
import { 
    useLoaderData, 
    useNavigation,
    Form,   
    redirect,
    useActionData 
} from "react-router-dom"
import { loginUser } from "../api"


export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {

    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
   const pathname = new URL(request.url)
         .searchParams.get("redirectTo") || "/cart/checkout"
     
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return (
        redirect(pathname)
        )
    } catch(err) {
        return err.message
    } 
}

export default function Login() {

function fakeLogOut() {
localStorage.removeItem("loggedin")
console.log(navigation.state);
}

    
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()     
return (
    <>
     <div className="login-container">
      <h1>Sign in to your account</h1>
      <br />
     {message && <h2 className="red">{message}</h2>}
     {errorMessage && <h3 className="red">{errorMessage}</h3>}
      <Form
       method="post"
       className="login-form"
       replace >
          <input
              name="email"
              type="email"
              placeholder="c@ndy.com"
          />
          <input
              name="password"
              type="password"
              placeholder="S123"
          />
          <button 
               disabled={navigation.state === "submitting"}
               >
          {navigation.state === "submitting" 
                     ? "Logging in..." 
                     : "Login"
                    }
          </button>
          </Form>
      <div className="logout">
       <button onClick={fakeLogOut}
       disabled={navigation.state === ""}>    
        Logout               
       </button>
      </div>
      </div>
</>
)   

}