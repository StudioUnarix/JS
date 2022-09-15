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

