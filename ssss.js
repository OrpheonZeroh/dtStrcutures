let data = [
  ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
  ["0000002", "MOVIL", "S", "CELULAR", ""],
  ["0000003", "ECHALE", "S", "CONTRATO", "NOCLIENTE", ""]
]

function infoTransform(values) {
  return values.map(value => {
    let [service, name, ...references] = value
    service = parseInt([value[0]])
    references = references.filter(reference => reference !== '');
    references = references.splice(1)


    return{
      service,
      name,
      references
    }

  })
  
}
console.log(infoTransform(data));