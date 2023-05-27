

const p = document.querySelector('#pId');
console.log(p.innerHtml) // Va a imprimir el texto dentro del párrafo con el id 'pID'
p.innerHTML = 'Nuevo texto'; // Acá estamos modificando el texto del párrafo mencionado anteriormente
console.log(p.innerHTML); // Va a imprimir el nuevo texto que le seteamos, es decir: "Nuevo texto"