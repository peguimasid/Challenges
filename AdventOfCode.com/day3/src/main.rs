use std::vec;

fn most_common_in_nth_pos(diagnostic: &Vec<&str>, pos: i32) -> char {
  let mut one_count = 0;
  let mut zero_count = 0;

  for i in 0..diagnostic.len() {
    match diagnostic[i].chars().nth(pos as usize).unwrap() {
      '0' => zero_count += 1,
      '1' => one_count += 1,
      _ => (),
    }
  }

  if one_count >= zero_count {
    return '1';
  }
  '0'
}

impl BinaryDiagnostic {
  fn solution(diagnostic: Vec<&str>) -> i32 {
    let most_common = most_common_in_nth_pos(&diagnostic, 1);

    let diagnostic_filtered: Vec<&&str> = diagnostic
      .iter()
      .filter(|x| return x.chars().nth(1).unwrap() == most_common)
      .collect();

    println!("{:?}", diagnostic_filtered);

    42
  }
}
struct BinaryDiagnostic;

fn main() {
  let diagnostic = vec![
    "00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001",
    "00010", "01010",
  ];
  println!("{}", BinaryDiagnostic::solution(diagnostic));
}
