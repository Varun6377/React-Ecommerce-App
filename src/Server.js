import { createServer, Model, Response } from 'miragejs';

createServer({
    models: {
      users: Model
    },          

    seeds(server) {
        server.create("user", { id: "123", email: "c@ndy.com", password: "s123", name:"User" })
  },
    
 
  
    routes(){
      this.namespace = "api"
      this.logging = false
      this.passthrough("https://firestore.googleapis.com/**")
      
      this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody)
    
      const foundUser = schema.users.findBy({ email, password })
      if (!foundUser) {
         return new Response(401, {}, { message: "No user with those credentials found!" })
}
    
      foundUser.password = undefined
      return {
          user: foundUser,
          token: "Here's your tokens."
      }
    })
  }
})




