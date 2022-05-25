export enum TYPES {
    _RIGHT = 'RIGHT',
    _CENTER = 'CENTER',
    _LEFT = 'LEFT',
}

export default {
  align_text: (text: string, type: TYPES, centerItem?: string, _width = 60): string => {
    const length = text.length;
    let leftSpaces = _width - length;
    let line = "";
    switch (type) {
      case TYPES._CENTER:
        leftSpaces /= 2;
        line = (centerItem ?? " ")
          .repeat(leftSpaces)
          .concat(text)
          .concat((centerItem ?? " ").repeat(leftSpaces));
        break;
      case TYPES._RIGHT:
        line = (centerItem ?? " ").repeat(leftSpaces).concat(text);
        break;
      case TYPES._LEFT:
      default:
        line = text;
    }
    return line;
  },
  text_between: (text: string, text2: string, _width = 60, item?: string): string => {
    const leftSpaces = _width - (text.length + text2.length);
    const line = text.concat((item ?? ' ').repeat(leftSpaces)).concat(text2)
    return line
  },
  capitalize: (text: string) => {
    const arr_text = text.split(' ');
    let aux
    arr_text.forEach((word, index) => {
        aux = word.substring(1, word.length).toLowerCase()
        word = word.charAt(0).toUpperCase()
        word += aux
        arr_text[index] = word
    })
    return arr_text.join(' ')
  }
};