#![allow(non_snake_case)]
#[path = "exercises/count_duplicates.rs"]
mod my_mod;

fn main() {
  println!("{}", my_mod::count_duplicates("abcde")); // 0
  println!("{}", my_mod::count_duplicates("aabbcde")); // 2
  println!("{}", my_mod::count_duplicates("aabBcde")); // 2
  println!("{}", my_mod::count_duplicates("indivisibility")); // 1
  println!("{}", my_mod::count_duplicates("Indivisibilities")); // 2
  println!("{}", my_mod::count_duplicates("aA11")); // 2
  println!("{}", my_mod::count_duplicates("ABBA")); // 2
}
