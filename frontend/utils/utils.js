export function truncateEthAddress(address) {
  if (!address || typeof address !== "string") {
    return "";
  }
  const prefix = address.slice(0, 4);
  const suffix = address.slice(-4);
  return `${prefix}...${suffix}`;
}

function str_to_felt(text) {
  if (text.length > 31) {
    throw "Text length too long to convert to felt.";
  }
  const myBigInt = BigInt("0x" + Buffer.from(text, "utf-8").toString("hex"));
  const myBN = new BN(myBigInt.toString());
  return myBN;
}

export function str_to_felt_array(text) {
  var result = [];
  for (var i = 0; i < text.length; i += 31) {
    result.push(str_to_felt(text.slice(i, i + 31)).toString());
  }
  return result;
}
