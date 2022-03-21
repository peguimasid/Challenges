function compress(sentence) {
  sentence = sentence.toLowerCase();

  const words = [...new Set([...sentence.split(' ')])];

  return sentence.split(' ').reduce((acc, word, index) => {
    acc += words.includes(word) ? words.findIndex((w) => w === word) : index;
    return acc;
  }, '');
}

console.log(
  compress(
    'Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country'
  )
);
