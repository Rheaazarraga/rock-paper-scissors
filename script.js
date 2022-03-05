const selectionButtons = document.querySelectorAll("[data-selection]");
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
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener("click", e => {
    const selectionName = selectionButton.dataset.selection
    // looping through all different selections and finding the one which matches the name as the selectionName
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  console.log(computerSelection);
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  // gives a random selection every time randomSelection is called
  return SELECTIONS[ randomIndex ]
}