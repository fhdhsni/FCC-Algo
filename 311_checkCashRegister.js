// https://www.freecodecamp.com/challenges/exact-change
function howManyOfThisCurrency(money, currency, goal) {
  const max = Math.floor(goal / currency);

  for (let i = max; max > 0; i -= 1) {
    if ((i * currency) <= money) {
      return i;
    }
  }

  return null;
}
function howMuchIsThis(money) {
  switch (money) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    default:
      return 100;
  }
}

function calcChange(cid, need) {
  const result = [];
  const reversedCash = cid.slice().reverse();
  let copyOfneed = need;

  reversedCash.forEach((money) => {
    const currency = howMuchIsThis(money[0]);

    if (currency <= copyOfneed) {
      const unit = howManyOfThisCurrency(money[1], currency, copyOfneed);

      if (unit * currency <= copyOfneed) {
        result.push([money[0], unit * currency]);
        copyOfneed -= (unit * currency);
        copyOfneed = copyOfneed.toFixed(2);
      }
    }
  });
  const allWeFound = result.reduce((sum, money) => sum + money[1], 0);

  if (allWeFound < need) {
    return "Insufficient Funds";
  }

  return result;
}
module.exports = function checkCashRegister(price, cash, cid) {
  const need = cash - price;
  const allWeHave = cid.reduce((sum, money) => sum + money[1], 0);

  if (need > allWeHave) {
    return "Insufficient Funds";
  } else if (need === allWeHave) {
    return "Closed";
  }

  return calcChange(cid, need);
};
