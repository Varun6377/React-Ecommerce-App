import { createServer, Model, Response } from 'miragejs';

createServer({
    models: {
      products: Model,
      users: Model
    },          

    seeds(server) {
       server.create("product", {id:1,name: "Burton Crusher® Evo Sensory Bass",
        imageUrl:"https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/238/98707/2d92d21d2475281865881904f42ae3a9c8b58f40817b2652d704df8e624cce5f__38062.1677538694.png?c=2"
        ,price:"20999", type:"Headphones", })
        server.create("product", {id:2, name:"Doritos Slyr® Multi-Platform Wired", 
        imageUrl:"https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/233/96760/f86f17bbd37a1d9c3643a1670feacce2379f66fb2b5860fd49923cbd10b4235e__55797.1673303170.png?c=2" 
        ,price:"6999",type:"Headphones",  })
        server.create("product", { id:3, name: "PLYR® Multi-Platform Wireless", 
        imageUrl:"https://cdn11.bigcommerce.com/s-fa8ae9fe8j/images/stencil/500x659/products/217/113226/e038b48fe119bdba8c355b6839d308cb6a80f4a21bcec270f5c650a11434b35e__26518.1689199387.png?c=2"
        ,price:"12999",type:"Headphones" })
        server.create("product", { id:4, name: "Street Fighter PLYR® Multi-Platform", 
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/407/127749/54b31367756de9da6f67f4ff6a1f6684663b1fbc5e01c3938bb96843f7667a3e__17166.1691132543.png?c=2" 
        , price:"14999",type:"Headphones" })
        server.create("product",{ id:5, name: " Riff® Wireless 2 On-Ear products",
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/397/125630/a7d2d0a4138857d261fb3ed903dae13fbc02d6d8ed9e0adfe32606aa59ba5894__09830.1688151567.jpg?c=2" 
        , price:"4999", type:"Headphones"})
        server.create("product",{ id:6, name: "Hesh® ANC Noise Canceling", 
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/344/109300/339651dd1f8cc98d06544be415ae80e3987fbb4780490cacbdcb99a22985f9c5__74946.1673679865.jpg?c=2"
        ,price:"13499",type:"Headphones" })   
        server.create("product", {id:7,name:"Rail", 
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/434/124993/d9c74fedd1abe4982aec95c59ebdc29a3a62423b2c0067fcec26c310d807d077__59189.1686847707.png?c=2",
        price:"9999",type:"Earbuds",})
        server.create("product", {id:8,name:"420",  
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/423/127912/8cfcd734eeffb73f025a089c77739749a52b861353285004366420ce54c1c4a7__27831.1691132606.png?c=2",
        price:"6299",type:"Earbuds",})  
        server.create("product", {id:9, name:"Terrain",
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/426/127326/2f244ee1b0d4e24ec5fff7fa41f3af837209d34b95540b662c6d345d7b8fd931__95514.1689182570.png?c=2"
        ,price:"7999",type:"Speakers"
        })
        server.create("product", {id:10, name:"Terrain-01",
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/424/127217/11acc9230960d588a1877d2021a011c93ed6a12fcf599db42e82360d3ab5915c__36133.1689182267.png?c=2"
        ,price:"5999",type:"Speakers",
        })
        server.create("product", {id:11, name:"Fuelbase",
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/412/83979/01192d70b1e50cd6f36a8fabd04de56eab6ea2106ee598c32a74b16f5b21d8c5__20342.1669073410.jpg?c=2"
        ,price:"3999" ,type:"Accessories"
        })
        server.create("product", {id:12, name:"Fat Stash",
        imageUrl:"https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/399/126141/354617179bedf58dead9b2d26d6cf6a62b282a7a8f1dc6ee7bbaaca91396926c__81225.1688661312.png?c=2"
        ,price:"3999" ,type:"Accessories"
        })
        server.create("user", { id: "123", email: "c@ndy.com", password: "S123", name:"User" })
  },
    
 
  
    routes(){
      this.namespace = "api"
      this.logging = false
      this.passthrough("https://firestore.googleapis.com/**")
      
      this.get("products", (schema, request) => {
        return schema.products.all()
      })
        
      this.get("products/:id", (schema, request) => {
        const id = request.params.id
        return schema.products.find(id)
    })
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




