let data = [
  ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
  ["0000002", "MOVIL", "S", "CELULAR", ""],
  ["0000003", "ECHALE", "S", "CONTRATO", "NOCLIENTE", ""],
];

function infoTransform(values) {
  return values.map(([id, name, _, ...refs]) => ({
      id: parseInt(id),
      name,
      ...Object.entries(
          refs.filter(r => r !== "")
              .map((r, i) => [`REF${i + 1}`, r])
      )
  }))
}
console.log(infoTransform(data))