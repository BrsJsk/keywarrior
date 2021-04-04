const ROWS_NUMBER = 8

export const createCanvas = () => {
  const canvasHeight = getCanvasRowHeight()
  console.log(canvasHeight)

  const rowItems = Array.from(Array(ROWS_NUMBER).keys())
  console.log(
    '🚀 ~ file: canvas.ts ~ line 8 ~ createCanvas ~ rowItems',
    rowItems
  )

  rowItems.forEach((_, index) => {
    createCanvasRow(index, canvasHeight)
  })
}

const getCanvasRowHeight = (): number => {
  const { innerHeight } = window
  return innerHeight / ROWS_NUMBER - 10
}

const createCanvasRow = (index: number, height: number): void => {
  const wrapper = document.getElementById('canvas_wrapper')
  const element = `
    <div class="canvas-row" id="canvas-row-${index}" style="margin-top: ${height}px">
    </div>
    `

  wrapper?.insertAdjacentHTML('beforeend', element)
}
