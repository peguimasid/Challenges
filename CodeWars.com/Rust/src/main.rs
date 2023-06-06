#[path = "exercises/unique_in_order.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::unique_in_order("AAAABBBCCDAABBB".chars())) // vec!['A','B','C','D','A','B']
}
