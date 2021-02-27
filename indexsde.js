let data = [
    ["0000001", "PAUL", "Y", "PELUCHE", "DRAKE", "DOG"],
    ["0000002", "ECHEBEL", "Y", "CAT", ""],
    ["0000003", "NANCY", "Y", "FERRET", "HAMSTER", ""]
  ]
  

  let orderData = data.reduce((a, b) => {
    let id = b[0]
    id = parseInt(b[0])
    let name = b[1]
    let pets = b.splice(3)

    if (!a.hasOwnProperty(id)) a[id] = {
      name: "",
      pets: []
    }
    
    a[id].name = name
 
    a[id].pets.push(...pets.filter(x => x !== ""))
    
    return a
  }, {})
  
  
  console.log(orderData)
  
  Object.keys(orderData).forEach(key => {
    
    let objeto = orderData[key]
   
    objeto.pets.forEach(pet => console.log(objeto.name, pet))
  })