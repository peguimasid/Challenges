fn main() {
  let result: Vec<i32> = include_str!("input.txt")
    .lines()
    .map(|n| n.parse().unwrap())
    .collect();

  println!("{:?}", result);
}
