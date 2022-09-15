let Nom = "larochette";
let prenom = "florian";
let age = 20;
let Nomvoisin = "calvin";
let PrenomVoisin = "Yardin";
let Annepro = age + 1;

let florian = {
    Nom: "Larochette" ,
    Prenom: "Florain" ,
    age: "20" ,
    genre: "Tractopelle U25 6 roues"
};

document.querySelector(".prenom").innerText = florian.Prenom
document.querySelector(".nom").innerText = florian.Nom
document.querySelector(".age").innerText = florian.age



document.querySelector(".Annepro").innerText = Annepro
document.querySelector(".Nomvoisin").innerText = Nomvoisin
document.querySelector(".PrenomVoisin").innerText = PrenomVoisin


class Personne
{
    constructor(Nom , prenom , age ,lunettes)
    {
        this.Nom = Nom;
        this.prenom = prenom;
        this.age = age;
        this.lunettes = Boolean;
    }
}

let voisin = ["calvin" , "Jeremy" , "Quentin"];

voisin.unshift("David");
voisin.push("Aurelie");


let tricolor = ["rouge" , "orange" , "vert" , "en panne"];

couleur = console.prompt("De quel couleur est le feu");

if(couleur = "rouge")
{
  alert("Vous ne pouvez pas passé");
}
else if(couleur = "orange")
{
    alert("Préparer vous à vous arrêté");
}
else if(couleur = "vert")
{
 alert("vous pouvez passé");
}
else
{
    alert("En panne faite attention");
}
