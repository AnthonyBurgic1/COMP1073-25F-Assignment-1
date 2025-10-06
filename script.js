// Arrays for each of the story elements \\ 
const subjects = ["The cat", "My teacher", "A robot", "An alien", "The pirate"];
const verbs = ["found", "ate", "painted", "lost", "built"];
const adjectives = ["a shiny", "a funny", "a gigantic", "a tiny", "a mysterious"];
const objects = ["apple", "spaceship", "castle", "book", "treasure"];
const places = ["in the forest", "on the moon", "at school", "under the sea", "in Italy"];

// Variables to store the selected choices \\ 
let choices = {
    subject: "",
    verb: "",
    adjective: "",
    object: "",
    place: ""
};  

// Functions to help cycle thorugh an array and help return it to the next element \\ 
function cycleChoice(array, currentValue) {
  let index = array.indexOf(currentValue);
  if (index === -1) return array[0]; // start from first if not found
  return array[(index + 1) % array.length];
}

// Add event listeners for each button \\
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

// Build and display the story \\ 
document.getElementById("makeStoryBtn").addEventListener("click", function() {
  if (Object.values(choices).some(value => value === "")) {
    document.getElementById("storyOutput").textContent =
      "Please make a choice for each part before creating your story!";
  } else {
    const story = `${choices.subject} ${choices.verb} ${choices.adjective} ${choices.object} ${choices.place}.`;
    document.getElementById("storyOutput").textContent = story;
  }
});