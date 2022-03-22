fn high_and_low(numbers: &str) -> String {
  let mut bigger = std::f64::NEG_INFINITY;
  let mut smaller = std::f64::INFINITY;

  for character in numbers.split_ascii_whitespace() {
    let char_to_string = character.to_string();
    let n: f64 = char_to_string.parse().unwrap();
    
    if n > bigger { bigger = n; };
    if n < smaller { smaller = n; };
  }

  return format!("{} {}", bigger, smaller);
}

fn main() {
  high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
}