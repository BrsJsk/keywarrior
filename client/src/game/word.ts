export const insertWord = (word: string, row: number): void => {
  const rowElement = document.getElementById(`canvas-row-${row}`)

  if (rowElement) {
    rowElement.innerText = word
  }
}
