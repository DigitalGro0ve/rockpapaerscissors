const selectionButtons = document.querySelectorAll("[data-selection]");
const SELECTIONS = [
  {
    name: "rock",
    print: "rock",
    beats: "scissor",
  },
  {
    name: "paper",
    print: "paper",
    beats: "rock",
  },
  {
    name: "scissor",
    print: "scissor",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selectionName);
  });
});
function makeSelection(selection) {
  console.log(selection);
}
