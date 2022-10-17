const getValues = () => [...document.getElementsByTagName('input')].map(({value})=> value )

const multiplicacion = (x,y) => x * y;
const division = (x,y) => x / y;
const resta = (x,y)=> x - y;

const aplicarOperacion = (operacion, array) => operacion(array[0],array[1])