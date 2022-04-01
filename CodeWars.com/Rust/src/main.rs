#![allow(non_snake_case)]
#[path = "exercises/sum_of_digits.rs"]
mod my_mod;

fn main() {
  println!("{}", my_mod::digital_root(234567890));
}
