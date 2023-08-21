const cart = []

const handleCart = (state = cart, action) => {
  const headphone = action.payload; 
switch (action.type) { 
   case "ADDITEM":
    const exist = state.find((x) => x.id === headphone.id);
    if(exist) {
             return state.map((x)=>
        x.id === headphone.id ? {...x, qty: x.qty + 1} : x 
        );
    }else{
    const headphone = action.payload;
      return [
        ...state,
   {
      ...headphone,
      qty: 1,
   }
]
    }
    break
    case "DELITEM":
      const exist1 = state.find((x)=> x.id === headphone.id)
      if(exist1){
          if(exist1.qty === 1) {
              return state.filter((x)=> x.id !== exist1.id );
          }else{
              return state.map((x)=> 
              x.id === headphone.id ? {...x, qty: x.qty - 1} : x);
          }
      }
      break;

      case "HAPUS":
          const exist2 = state.find((x)=> x.id === headphone.id)
           return state.filter((x)=> x.id !== exist2.id );


           break;

    default:
      return state
      break
}
}


export default handleCart