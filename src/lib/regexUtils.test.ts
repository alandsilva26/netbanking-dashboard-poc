import { regExpFromArr } from './regexUtils';

describe('Regex utils test', () => {
  test('for /customers/new', () => {
    const test = new RegExp('/?customers/new/?[*]*$');

    expect(regExpFromArr(['customers', 'new', '*'])).toStrictEqual(test);
  });

  test('for home', () => {
    const test = new RegExp('^/$');

    expect(regExpFromArr([''])).toStrictEqual(test);
  });
});

export {};
