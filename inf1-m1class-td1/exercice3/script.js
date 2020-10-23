
var totalPersonnes = [];

function Personne (nom, age, sexe, nationnalite){
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.nationnalite = nationnalite;
}


function AjouterPersonne(form){
    var nomP = document.getElementById('name').value;
    var ageP = document.getElementById('age').value;
    var sexeP = document.getElementById('gender').value;
    var nationnaliteP = document.getElementById('nationnalité').value;

    var personne = new Personne (nomP, ageP, sexeP, nationnaliteP );
    totalPersonnes.push(personne); //toutes les personnes
    
    alert("Une personne ajoutée");
    document.getElementById("totalPers").innerHTML= personne.nom;
    
    
}


//function generateAll(){
    //

//}

