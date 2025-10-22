var notes = [
  [85, 72, 90, 85], // Étudiant 1
  [60, 68, 75, 80], // Étudiant 2
  [95, 88, 90, 91], // Étudiant 3
  [45, 52, 60, 65], // Étudiant 4
];
console.log("Résultats des étudiants");
notes.forEach((note) => {
    console.log(`Étudiant ${notes.indexOf(note) + 1}: ${note[0]} - ${note[1]} - ${note[2]} - ${note[3]}`);
});

console.log("Moyenne des étudiants");
var notesMoyennes = notes.map((note) => {
    return Math.ceil((note[0] + note[1] + note[2] + note[3]) / 4);
})
notesMoyennes.forEach((note) => {
    console.log(`Étudiant ${notesMoyennes.indexOf(note) + 1}: ${note}`);
});