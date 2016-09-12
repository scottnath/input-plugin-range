import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'range',
    value: '2',
  },
};

const badInput = {
  target: {
    name: 'range',
    value: '5',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    range: {
      min: 1,
      max: 3,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Valid bad input returns error
test('validate number out of range', t => {
  t.is(validation(badInput, settings), 'range must be a value within given range!', 'Return string if not valid');
});
