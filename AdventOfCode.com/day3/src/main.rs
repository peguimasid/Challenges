impl BinaryDiagnostic {
  fn solution(diagnostic: Vec<&str>) -> i32 {
    // println!("{:?}", diagnostic[0].chars().nth(0).unwrap());
    // println!("{:?}", diagnostic[1].chars().nth(0).unwrap());
    // println!("{:?}", diagnostic[2].chars().nth(0).unwrap());
    let mut result = Vec::<i32>::new();

    for i in 0..diagnostic[0].chars().count() {
      for j in 0..diagnostic.len() {
        println!(
          "{} <<>> i = {} | j = {}",
          diagnostic[j].chars().nth(i).unwrap(),
          i,
          j
        );
      }
    }

    // println!("{:?}", result);
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
