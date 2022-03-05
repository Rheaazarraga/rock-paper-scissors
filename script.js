const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const AIScoreSpan = document.querySelector("[data-AI-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
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
  const AiSelection = randomSelection();
  const yourWinner = isWinner(selection, AiSelection)
  const AiWinner = isWinner(AiSelection, selection)

  addSelectionResult(AiSelection, AiWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (AiWinner) incrementScore(AIScoreSpan)
}

function addSelectionResult(selection, winner) {
  // allow your selection to be displayed after the AI text
  const div = document.createElement("div")
  div.innerText = selection.emoji
  div.classList.add("result-selection")
  if (winner) div.classList.add("winner")
  finalColumn.after(div)

}

// handles score increment display
function incrementScore(scoreSpan) {
  // takes the current text, converts it to an integer and increments by 1, then saves as new text
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isWinner(selection, opponentSelection) {
  // check: if rock beats scissors - beats property from rock = scissors  - if name of opponent selection is "scissors", then it's confirmed that rock has beaten scissors
  return selection.beats === opponentSelection.name
}

// gives a random selection every time randomSelection is called
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[ randomIndex ]
}