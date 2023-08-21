export const addCart = (headphone) => {
  return {
    type: "ADDITEM",
    payload: headphone
  }
}

export const delCart = (headphone) => {
  return{
      type : "DELITEM",
      payload : headphone
  }
}

export const delCrt = (headphone) => {
  return{
      type : "HAPUS",
      payload : headphone
  }
}