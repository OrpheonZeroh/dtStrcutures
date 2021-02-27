function petFilter(array){
  let a, n, r = [];
  for(let z=0,c=1,q=array.length; z<q; z++,c++){
    a = array[z]; n = a.splice(1, 1)[0]; a.splice(0, 2);
    console.log()
    for(let i=0,m=1,v,l=a.length; i<l; i++,m++){
      v = a[i]
      if(v !== '')r.push({service:c, name:n, ['REF'+m]:v});
    }
  }
  return r;
}
let data = [
  ["0000001", "SCHOLL", "S", "CEDULA", "NOESTUDIANTE", "GRADO"],
  ["0000002", "MOVIL", "S", "CELULAR", ""],
  ["0000003", "ECHALE", "S", "CONTRATO", "NOCLIENTE", ""]
];
console.log(petFilter(data));