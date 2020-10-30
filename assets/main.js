/**
 * DOM Adventure Game
 */

function updateText() {
    document.getElementById("fieldText").textContent=story;
    document.getElementById("choiceText1").textContent=choice1;
    document.getElementById("choiceText2").textContent=choice2;
}

let story = "You have just escaped some sort of dungeon, nearly dying to a bear in the process. At least you picked up some gold pieces on the way out, while being chased by the aforementioned bear. After catching your breath, you look around and see the dungeon entrance, as well as some smoke far in the distance.";
let choice1 = "Dungeon";
let choice2 = "Smoke";
updateText();

window.addEventListener("keyup", event => {
    if (event.key == "ArrowLeft") {
        return death();
    }
    if (event.key == "ArrowRight") {
        return onTrail();
    }
});

let button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log("Button clicked.");
  });
function death() {
    window.removeEventListener("keyup");
    story = "You have died. Refresh page to try again.";
    updateText();
    document.getElementById("field").style.background = "red";
    document.getElementById("fieldText").style.textAlign = "center";
}

function onTrail() {

    story = "You begin to head towards the smoke. Shortly after, you find a trail that seems to go in the smoke's direction. A tiny glowing being appears and begins to fly around you, seemingly wanting you to follow it.";
    choice1 = "Ignore";
    choice2 = "Follow";
    updateText();
    window.addEventListener("keyup", event => {
        if (event.key == "ArrowLeft") {
            return inTown();
        }
        if (event.key == "ArrowRight") {
            return death();
        }
    });
}

function inTown() {

    story = "Ignoring the pixie, you continue on and eventually come across a small town. You walk around and see a friendly looking man in the marketplace. After conversating for a while, he tells you about an evil wizard in a tower to the north. Suddenly, you remember being locked in the dungeon by a wizard after calling his hat stupid. You tell the man that you must stop the wizard. The man says \"Are you sure? I've heard that wizard is really powerful.\"";
    choice1 = "Never give up, believe in yourself!!!";
    choice2 = "give up";
    updateText();
    window.addEventListener("keyup", event => {
        if (event.key == "ArrowLeft") {
            return noFear();
        }
        if (event.key == "ArrowRight") {
            return death();
        }
    });
}