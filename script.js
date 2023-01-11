/* Exercice 2 */ 
let gradesList = [10,11,14,2,7,18,10];
let somme =0;
let moyenne =0;
function findAvg(){
    for (let note of gradesList){
        somme = somme + note;  
    }
    moyenne = somme / gradesList.length;
    console.log(moyenne)
    if(moyenne > 65){
        console.log("vous avez reussir");
    } else {
        console.log("vous avez echoué veuillez reprendre");
    }
}

findAvg();