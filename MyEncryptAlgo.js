const prompt = require("prompt-sync")();

const spice = [
  "vbTcG7",
  "bWZ4IN",
  "SZky3n",
  "zccMcN",
  "hj1g1G",
  "ZXaTj8",
  "RgOKlO",
  "npjYXt",
  "t6sl1U",
  "fnqpFb",
  "lQeFMJ",
  "CiNAMO",
  "mHmLcz",
  "C6y2TM",
  "LYO7WS",
  "ZtHNOO",
  "ApmkhH",
  "QXJ0XV",
  "9MbUjl",
  "OjxV0K",
  "EljuNr",
  "Y3g2SI",
  "CMb97j",
  "GirbqW",
  "3xkPT3",
  "oiOBjg",
  "G4JVqQ",
  "7i9JPu",
  "cODKhM",
  "l59aKF",
];

//Password encode
function reverseString(string) {
  const strArray = string.split("");
  const reverseArray = strArray.reverse(strArray);
  let result = "";
  for (const el of reverseArray) {
    result += el;
  }
  return result;
}

function shuffleItemInArray(array) {
  let i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function hash(string, order) {
  const array = [0, 1, 2, 3, 4, 5];
  const randomSpice = Math.floor(Math.random() * 31);
  let result = "";
  const shuffleArray = shuffleItemInArray(array);

  for (const el of shuffleArray) {
    result += spice[randomSpice][el];
  }

  if (order === "na") {
    return result + string;
  } else {
    return result + reverseString(string);
  }
}

function encodeMain(password, order) {
  const pwLength = String(password).length;
  const numberOfCollections = Number(pwLength) / 3;
  const hashArray = [];
  let swapArray = [];
  let hashInfo = "";

  for (let i = 0; i < numberOfCollections; i++) {
    const splitPW = String(password).substring(i * 3, i * 3 + 3);
    hashArray.push(hash(splitPW, order));
    swapArray.push(i);
  }

  swapArray = shuffleItemInArray(swapArray);

  for (const item of swapArray) {
    hashInfo += hashArray[item];
  }

  return `&${pwLength}${order}&${hashInfo}&${swapArray.join("")}`;
}

const input = prompt("Input password: ");
const encoder = encodeMain(String(input), "re");

//Password decode
function getStringLengthAndOrder(param) {
  let length = 0,
    order = "";

  if (String(param).includes("re")) {
    order = "re";
    param = String(param).replace("re", "");
  }

  if (String(param).includes("na")) {
    order = "na";
    param = String(param).replace("na", "");
  }
  length = Number(param);
  return { length, order };
}

function strLengthWithPosition(length, orderArr) {
  const totalChar = [];
  let appearance = 0;
  let attempts = 2000;
  let lengthTmp = length;
  for (let i = 0; i < length / 3; i++) {
    totalChar.push(null);
  }
  while (attempts--) {
    for (let i = 0; i < length / 3; i++) {
      if (orderArr[i] === appearance) {
        totalChar[i] = lengthTmp > 3 ? 3 : lengthTmp;
        lengthTmp = lengthTmp - 3;
        appearance++;
      }
    }

    if (!totalChar.includes(null)) {
      break;
    }
  }

  return totalChar;
}

function reAlignActualDecode(orderArr, result) {
  for (let i = 0; i < orderArr.length - 1; i++) {
    for (let j = i + 1; j < orderArr.length; j++) {
      if (orderArr[j] < orderArr[i]) {
        let str = result[i];
        result[i] = result[j];
        result[j] = str;
      }
    }
  }
}

function getActualHashPhrase(hashArr, order, orderArr) {
  const result = [];
  for (const hash of hashArr) {
    for (const el of spice) {
      let matchRes = 0;
      for (const char of el) {
        if (hash.includes(char)) {
          matchRes++;
        }
      }

      if (matchRes === 6) {
        break;
      }
    }
    const decodePhrase = hash.substring(6);
    if (order === "re") result.push(reverseString(decodePhrase));
    else if (order === "na") {
      result.push(decodePhrase);
    }
  }

  //re-align actual decode
  reAlignActualDecode(orderArr, result);
  return result.join("");
}

function decoder(length, order, shuffleOrder, hashPW) {
  let error = null;
  let encoder = String(hashPW);
  const orderArr = [];
  const encodeArr = [];

  for (const numb of shuffleOrder) {
    orderArr.push(Number(numb));
  }
  const totalCharArr = strLengthWithPosition(length, orderArr);

  //store hash phrase into array
  for (const numb of totalCharArr) {
    const tmp = encoder.substring(0, 6 + numb);
    encodeArr.push(tmp);
    encoder = encoder.substring(6 + numb);
  }

  const result = getActualHashPhrase(encodeArr, order, orderArr);
  console.log(result);
  return error;
}

function decodeMain(stringEncode) {
  const [, lengthAndOrder, hashPW, shuffleOrder] =
    String(stringEncode).split("&");
  const { length, order } = getStringLengthAndOrder(lengthAndOrder);
  decoder(length, order, shuffleOrder, hashPW);
}

decodeMain(encoder);
