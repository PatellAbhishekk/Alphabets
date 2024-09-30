function encrypt(text, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedstr = "";
  for (let char of text) {
    if (!alphabet.includes(char)) {
      encryptedstr += char;
      continue;
    }
    const index = alphabet.indexOf(char);
    let newIndex = index + num;
    if (newIndex > 25) {
      newIndex %= 26;
    }
    const alpha = alphabet[newIndex];
    encryptedstr += alpha;
  }
  console.log(encryptedstr);
}
encrypt("abhishek", 26);
