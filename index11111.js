let datos = [
    ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
    ["0000002", "DIGICEL", "S", "CELULAR", ""],
    ["0000003", "LEASING", "S", "CONTRATO", "NOCLIENTE", ""]
  ]

function epale(datos){
  let orderData = data.reduce((a, b) => {
    let id = b[0]
    id = parseInt(b[0])
    let name = b[1]
    let pets = b.splice(3)
  
    if (!a.hasOwnProperty(id)) 
    a[id] = {
      id: id,
      name: "",
      pets: []
    }
  
    a[id].name = name
  
    a[id].pets.push(...pets.filter(x => x !== ""))
  
    return a
  }, {})
  console.log("orderData")
  console.log(orderData)
  
  let result = []
  Object.keys(orderData).forEach(key => {
  let objeto = orderData[key]
  
      let i = 1
  objeto.pets.forEach(pet => {
      let petNum = "PET" + i++
      let petName = pet
      
      let temp = {
          "id": objeto.id,
          "name": objeto.name,
          };
          temp[petNum] = petName
      
      result.push(temp)
      })
  })
  console.log(result)
}