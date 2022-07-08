impl BinaryDiagnostic {
  fn solution(diagnostic: Vec<&str>) -> i32 {
    let mut gamma_rate = String::new();
    let mut epsilon_rate = String::new();

    for i in 0..diagnostic[0].chars().count() {
      let mut one_count = 0;
      let mut zero_count = 0;

      for j in 0..diagnostic.len() {
        match diagnostic[j].chars().nth(i).unwrap() {
          '0' => zero_count += 1,
          '1' => one_count += 1,
          _ => (),
        }
      }

      if one_count > zero_count {
        gamma_rate.push('1');
        epsilon_rate.push('0');
      } else {
        gamma_rate.push('0');
        epsilon_rate.push('1');
      }
    }

    let gamma_to_int = isize::from_str_radix(gamma_rate.as_str(), 2).unwrap();
    let epsilon_to_int = isize::from_str_radix(epsilon_rate.as_str(), 2).unwrap();

    (gamma_to_int * epsilon_to_int).try_into().unwrap()
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
