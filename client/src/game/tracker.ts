import { Subject } from 'rxjs'

let keyboardPresses = ''

export const getEnteredWord = new Subject<string>()

export const trackKeyboardPress = () => {
  window.onkeypress = ({ key }: KeyboardEvent) => {
    keyboardPresses = `${keyboardPresses}${key}`
    getEnteredWord.next(keyboardPresses)
  }
}
