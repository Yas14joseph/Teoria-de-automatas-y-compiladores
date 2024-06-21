//let texto = "abc123$/())%#";
//let expresion = /\p{S}/gu;
//console.log(texto.match(expresion))

let texto = "    jsajsa  \n\t   ";
let expresion = /\p{Z}|\u000A|\u0009/gu;
console.log(texto.match(expresion))

//let texto = "   Ma   Γειά σου Κόσμε ";
//let expresion = /\p{Ll}|\p{Lu}/gu;
//console.log(texto.match(expresion))

//let texto = "   Maiadshashash &&%#$#° 2134343     ";
//let expresion = /\p{L}|\p{N}/gu;
//console.log(texto.match(expresion))