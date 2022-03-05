const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "🪨",
    beats: "scissors"
  },
  {
    name: "paper",
    emoji: "📃",
    beats: "rock"
  },
  {
    name: "scissors",
    emoji: "✂️",
    beats: "paper"
  }
];

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener("click", e => {
    const selectionName = selectionButton.dataset.selection
    // looping through all different selections and finding the one which matches the name as the selectionName
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)
  console.log(computerSelection);
}

function addSelectionResult(selection, winner) {
  // allow your selection to be displayed after the Computer text
  const div = document.createElement("div")
  div.innerText = selection.emoji
  div.classList.add("result-selection")
  if (winner) div.classList.add("winner")
  finalColumn.after(div)

}

function isWinner(selection, opponentSelection) {
  // check: if rock beats scissors - beats property from rock = scissors  - if name of opponent selection is "scissors", then it's confirmed that rock has beaten scissors
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  // gives a random selection every time randomSelection is called
  return SELECTIONS[ randomIndex ]
}