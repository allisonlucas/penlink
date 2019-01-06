function formatType(type) {
    let formattedType;
    // replace an '-' or '_' character with a space
    formattedType = type.replace('_', ' ');
    formattedType = formattedType.replace('-', ' ');
    // title case the string
    const words = formattedType.split(' ');
    formattedType = words.map(w => {
      const capitalFirstLetter = w[0].toUpperCase();
      return w.replace(w[0], capitalFirstLetter);
    }).join(' ');
    return formattedType;
};

function sortData(data) {
    // clone the original data array
    const dataClone = data.slice(0);
    // sort the cloned array alphabetically by title
    return dataClone.sort((a, b) => {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    });
};

module.exports = {
    formatType,
    sortData
};
