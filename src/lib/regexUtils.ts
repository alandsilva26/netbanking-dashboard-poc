export const regExpFromArr = (arr: string[]): RegExp => {
  let regString: string = '';

  if (arr.length === 0) {
    regString = '/';
  } else {
    if (arr[0] === '') {
      regString = '^/';
    } else {
      arr.forEach((item: string, index: number) => {
        if (item === '*') {
          regString += '/?[*]*';
        } else {
          if (index === 0) {
            regString += `/?${item}`;
          } else {
            regString += `/${item}`;
          }
        }
      });
    }
  }

  regString += '$';

  return new RegExp(regString);
};
