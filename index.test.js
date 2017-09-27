const phoneNumber = require('./phoneNumber');


//and now...to test!!
test('handle phone number w/o symbols and without 1 at beginning', () => {
  expect(phoneNumber('2024561111')).toBe('+12024561111');
});

test('handle number w/o symbols but with 1 at beginning', () => {
  expect(phoneNumber('12024561111')).toBe('+12024561111');
});

//edge case
test('handle number w/o symbols AND with a number other than one at the beginning', () => {
  expect(phoneNumber('42024561111')).toBe(null);
});

test('handle symbols : dash edition', () => {
  expect(phoneNumber('1-202-456-1111')).toBe('+12024561111');
});

test('handle symbols : forward slash edition.', () => {
  expect(phoneNumber('1/202/456/1111')).toBe('+12024561111');
});

test('handle symbols : dot edition.', () => {
  expect(phoneNumber('1.202.456.1111')).toBe('+12024561111');
});



///for when information is missing or not acceptable.
test('handle a phone number without an area code', () => {
  expect(phoneNumber('456-3456')).toBe(null);
})

test('handle gobbldy-gook from the user', () => {
  expect(phoneNumber('di-7-$gh')).toBe(null);
})

test('handle input of nothing', () => {
  expect(phoneNumber('')).toBe(null);
})



//extensions.
test('handle extension of four', () => {
  expect(phoneNumber('202-123-4555 ext. 1234')).toBe('+12021234555;ext1234');
})

test('handle extension of three', () => {
  expect(phoneNumber('202-123-4555ext123')).toBe('+12021234555;ext123');
})
