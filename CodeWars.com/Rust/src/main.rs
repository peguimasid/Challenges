#[path = "exercises/digital_root.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::digital_root(16)); // 7
  println!("{:?}", lib::digital_root(942)); // 6
  println!("{:?}", lib::digital_root(132189)); // 6
}
