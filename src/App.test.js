const dataFormatting = require('./utils/dataFormatting');

const dataToSort = [
    {
        "title": "c"
    },
    {
        "title": "a"
    },
    {
        "title": "b"
    }
];
const sortedData = [
    {
        "title": "a"
    },
    {
        "title": "b"
    },
    {
        "title": "c"
    }
];

test('formats data type', () => {
    expect(dataFormatting.formatType('phone_number and cell-number'))
        .toBe('Phone Number And Cell Number');
});

test('sorts data alphabetically by title', () => {
    expect(dataFormatting.sortData(dataToSort)).toEqual(sortedData)
});

test('sorting does not alter original data array', () => {
    expect(dataFormatting.sortData(dataToSort)).not.toEqual(dataToSort)
});
