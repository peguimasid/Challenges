fn get_next_char(character: char) -> char {
  match character {
    'w' => return 'o',
    'o' => return 'r',
    'r' => return 'd',
    'd' => return 'w',
    _ => return 'w'
  }
}

fn testit(s: &str) -> usize {
  let mut result: usize = 0;
  let mut current_char: char = 'w';

  for character in s.to_string().to_lowercase().chars() {
    if character == current_char {
      if current_char == 'd' { result += 1 }
      current_char = get_next_char(current_char);
    }
  }

  return result;
}

fn main() {
  assert_eq!(testit("word"), 1);
  assert_eq!(testit("hello world"), 1);
  assert_eq!(testit("I love codewars."), 0);
  assert_eq!(testit("My cat waiting for a dog."), 1);
  assert_eq!(testit("We often read book, a word hidden in the book."), 2);
  assert_eq!(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2);
  assert_eq!(testit("This sentence have one word."), 1);
  assert_eq!(testit("This sentence have two word, not one word."), 2);
  assert_eq!(testit("One word + one word = three word ;-"), 3);
  assert_eq!(testit("Can you find more word for me?"), 1);
}