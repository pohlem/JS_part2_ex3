function press(event){
var touche = event.which;
console.log(touche);
var nom = String.fromCharCode(touche);
console.log(nom);
alert('Vous avez appuyé sur '+nom); 
}