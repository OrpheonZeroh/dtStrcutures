var request = {
    "custormerInfo": {"id":"2", "documentId":"233", "reference":"R", "name":"Luis"}
}
let data = [
    ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
    ["0000002", "MOVIL", "S", "CELULAR", ""],
    ["0000003", "ECHALE", "S", "CONTRATO", "NOCLIENTE", ""]
  ];

function cargaReq(request) {
    
    let parametros = []
    if (request.custormerInfo.reference === 'R') {
        request.custormerInfo.reference = 'RUC'
    }
    parametros.push(request.custormerInfo.id)
    parametros.push(request.custormerInfo.documentId)
    parametros.push(request.custormerInfo.reference)
    parametros.push(request.custormerInfo.name)

    

    return parametros
}
console.log(cargaReq(request))