// https://www.freecodecamp.com/challenges/inventory-update

function orderAlphabbetically(arr) {
  arr.sort((a, b) => {
    const itemA = a[1].toUpperCase();
    const itemB = b[1].toUpperCase();

    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }

    return 0;
  });
}

function flatToOnlyNameOfItems(arr) {
  const result = [];

  arr.forEach((innerArray) => {
    result.push(innerArray[1]);
  });

  return result;
}

module.exports = function updateInventory(curInv, newInv) {
  const flatenedCurInv = flatToOnlyNameOfItems(curInv);
  const flatenedNewInv = flatToOnlyNameOfItems(newInv);

  flatenedNewInv.forEach((item, i) => {
    const index = flatenedCurInv.indexOf(item);

    if (index === -1) {
      curInv.push(newInv[i]);
    } else {
      /* eslint no-param-reassign: 0*/
      curInv[index][0] += newInv[i][0]; // adding new quantity to old quantity
    }
  });
  orderAlphabbetically(curInv);

  return curInv;
};
