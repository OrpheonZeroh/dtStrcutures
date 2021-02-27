let data = [
  ["0000001", "SCHOLL", "Y", "CEDULA", "NOESTUDIANTE", "GRADO"],
  ["0000002", "MOVIL", "Y", "CELULAR", ""],
  ["0000003", "ECHALE", "Y", "CONTRATO", "NOCLIENTE", ""],
];


function infoTransform(values) {
  return values.map((value) => {
    let [service, name, ...references] = value;
    service = parseInt([value[0]]);
    references = references.filter((reference) => reference !== '');
    references = references.splice(1);
    let Myjson = references.reduce((acc, curr, index) => {
      acc[`REF${index + 1}`] = curr;
      return acc;
    }, {});
    return {
      service,
      name,
      ...Myjson,
    };
  });
}console.log(infoTransform(data))
