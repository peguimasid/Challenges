#[path = "exercises/can_make_arithmetic_progression.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::can_make_arithmetic_progression(vec![3, 5, 1])); // true
  println!("{:?}", lib::can_make_arithmetic_progression(vec![1, 2, 4])); // false
}
