var notes = [
  [85, 72, 90, 85], // Étudiant 1
  [60, 68, 75, 80], // Étudiant 2
  [95, 88, 90, 91], // Étudiant 3
  [45, 52, 60, 65], // Étudiant 4
];
console.log("Résultats des étudiants");
notes.forEach((note) => {
    console.log(`Étudiant ${notes.indexOf(note) + 1}: ${note.join(" - ")}`);
});

console.log("Moyenne des étudiants");
var notesMoyennes = notes.map((note) => {
    return Math.round(note.reduce((total, resultat) => total + resultat) / note.length);
})
notesMoyennes.forEach((note) => {
    console.log(`Étudiant ${notesMoyennes.indexOf(note) + 1}: ${note}`);
});

var reussite = [];
var echec = [];
notesMoyennes.forEach((note) => {
    if(note >= 60){
        reussite.push(notesMoyennes.indexOf(note) + 1);
    } else{
        echec.push(notesMoyennes.indexOf(note) + 1);
    }
})
console.log(`Étudiants ayant réussi : ${reussite}`);
console.log(`Étudiants en situation d'échec : ${echec}`);

var moyenneOutils = 0;
var moyenneFonct = 0;
var moyenneDW = 0;
var moyenneProg = 0;
notes.forEach((note) => {
    moyenneOutils += note[0];
    moyenneFonct += note[1];
    moyenneDW += note[2];
    moyenneProg += note[3];
});
moyenneOutils = moyenneOutils / 4;
moyenneFonct = moyenneFonct / 4;
moyenneDW = moyenneDW / 4;
moyenneProg = moyenneProg / 4;
moyenneCours = [moyenneOutils, moyenneFonct, moyenneDW, moyenneProg];
moyenneCours = moyenneCours.map((moyenne) => {
    return Math.round(moyenne);
})
console.log("Moyenne des cours:");
console.log(`Outils Informatiques : ${moyenneCours[0]}%`);
console.log(`Fonctionnement de l'ordinateur : ${moyenneCours[1]}%`);
console.log(`Design Web : ${moyenneCours[2]}%`);
console.log(`Programmation 1 : ${moyenneCours[3]}%`);


//autre moyen
let moyenneO = notes.reduce((total, note) => total + note[0], 0) / notes.length;
let moyenneF = notes.reduce((total, note) => total + note[1], 0) / notes.length;
let moyenneD = notes.reduce((total, note) => total + note[2], 0) / notes.length;
let moyenneP = notes.reduce((total, note) => total + note[3], 0) / notes.length;