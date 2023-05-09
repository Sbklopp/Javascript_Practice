const practice = require('../practice/01_strings')

const combine = (string1, string2) => {
  return string1 + string2
}

// TEST 1
describe('combine', () => {
  test('concatenates two strings', () => {
    const string1 = 'hello';
    const string2 = 'world';
    const expected = 'helloworld';
    const result = practice.combine(string1, string2);
    expect(result).toEqual(expected);
  });
});


// TEST 2
describe('isString', () => {
  test('returns true for a string', () => {
    expect(practice.isString('hello')).toBe(true);
    expect(practice.isString({ name: 'John' })).toBe(false);
    expect(practice.isString(123)).toBe(false);
    expect(practice.isString(true)).toBe(false);
  });
});

// TEST 3
describe('characterCount', () => {
  test('returns the correct character count for a string', () => {
    expect(practice.characterCount('hello world')).toBe(11);
    expect(practice.characterCount('   ')).toBe(3);
    expect(practice.characterCount('')).toBe(0);
  });
});

// TEST 4
describe('firstCharacter', () => {
  test('returns the first character of a string', () => {
    expect(practice.firstCharacter('hello')).toBe('h');
  });
});

// TEST 5
describe('lastCharacter', () => {
  test('returns the last character of a string', () => {
    expect(practice.lastCharacter('hello')).toBe('o');
    expect(practice.lastCharacter('To be or not')).toBe('t');
  })
})

// TEST 6
describe('shout', () => {
  test('returns the string uppercase and adds exclamation', () => {
    expect(practice.shout('hello')).toEqual('HELLO!');
    expect(practice.shout('what did you say to me?')).toEqual('WHAT DID YOU SAY TO ME?!')
  })
})

// TEST 7
describe('removeFirstLetter', () => {
  test('removes the first letter of a string', () => {
    expect(practice.removeFirstCharacter('hello')).toBe('ello');
    expect(practice.removeFirstCharacter('a')).toBe('');
    expect(practice.removeFirstCharacter('')).toBe('');
  });
});


// TEST 8
describe('removeFirstThree', () => {
  test('removes the first 3 characters of a string', () => {
    expect(practice.removeFirstThree('hello world')).toBe('lo world');
    expect(practice.removeFirstThree('abc')).toBe('');
    expect(practice.removeFirstThree('hi')).toBe('');
    expect(practice.removeFirstThree('')).toBe('');
  });
});

// TEST 9
describe('removeNAmount', () => {
  test('removes n amount of characters from a string', () => {
    expect(practice.removeNAmount('hello world', 1)).toBe('ello world')
    expect(practice.removeNAmount('Donkey Kong', 7)).toBe('Kong')
    expect(practice.removeNAmount('Book', 4)).toBe('')
  })
})

// TEST 10
describe('capitalized', () => {
  test('capitalizes the first letter of a string', () => {
    expect(practice.capitalized('hello')).toBe('Hello');
    expect(practice.capitalized('world')).toBe('World');
    expect(practice.capitalized('JavaScript')).toBe('JavaScript');
    expect(practice.capitalized('')).toBe('');
  });
});