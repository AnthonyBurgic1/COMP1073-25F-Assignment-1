const subjects = ["The cat", "My teacher", "A robot", "An alien", "The pirate"];
const verbs = ["found", "ate", "painted", "lost", "built"];
const adjectives = ["a shiny", "a funny", "a gigantic", "a tiny", "a mysterious"];
const objects = ["apple", "spaceship", "castle", "book", "treasure"];
const places = ["in the forest", "on the moon", "at school", "under the sea", "in Italy"];

let choices = {
    subject: "",
    verb: "",
    adjective: "",
    object: "",
    place: ""
};  

function cycleChoice(array, currentValue) {
    let index =  array.indexOf(currentValue);
    return array[(index + 1) % array.length];
}

document.getElementById("subjectBtn").addEventListener("click", function() {
  choices.subject = cycleChoice(subjects, choices.subject);
  this.textContent = choices.subject || subjects[0];
});

document.getElementById("verbBtn").addEventListener("click", function() {
  choices.verb = cycleChoice(verbs, choices.verb);
  this.textContent = choices.verb || verbs[0];
});

document.getElementById("adjectiveBtn").addEventListener("click", function() {
  choices.adjective = cycleChoice(adjectives, choices.adjective);
  this.textContent = choices.adjective || adjectives[0];
});

document.getElementById("objectBtn").addEventListener("click", function() {
  choices.object = cycleChoice(objects, choices.object);
  this.textContent = choices.object || objects[0];
});

document.getElementById("placeBtn").addEventListener("click", function() {
  choices.place = cycleChoice(places, choices.place);
  this.textContent = choices.place || places[0];
});
