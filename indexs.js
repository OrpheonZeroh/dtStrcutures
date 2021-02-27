let data = [
  ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
  ["0000002", "MOVIL", "S", "CELULAR", ""],
  ["0000003", "ECHALE", "S", "CONTRATO", "NOCLIENTE", ""]
]
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
console.log(orderData)

Object.keys(orderData).forEach(key => {

let objeto = orderData[key]
objeto.pets.forEach(pet => console.log(objeto.id, objeto.name, pet))
})