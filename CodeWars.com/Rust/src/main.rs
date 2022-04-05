#![allow(non_snake_case)]
#[path = "exercises/find_multiples_of_a_number.rs"]
mod my_mod;

fn main() {
  println!("{:?}", my_mod::find_multiples(4, 27));
}
