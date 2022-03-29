fn solution(s: &str) -> String {
  let mut result = String::from("");

  for letter in s.chars() {
    if letter.is_uppercase() { result.push(' ') }

    result.push(letter)
  }

  result
}

fn main() {
  println!("{}", solution("camelCasing")); // "camel Casing"
  println!("{}", solution("camelCasingTest")); // "camel Casing Test"
}