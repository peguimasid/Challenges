#![allow(non_snake_case)]
#[path = "exercises/rgb_to_hex.rs"]
mod my_mod;

fn main() {
  println!("{:?}", my_mod::rgb(0, 0, 0)); // '000000'
  println!("{:?}", my_mod::rgb(0, 0, -20)); // '000000'
  println!("{:?}", my_mod::rgb(300, 255, 255)); // 'FFFFFF'
  println!("{:?}", my_mod::rgb(173, 255, 47)); // 'ADFF2F'
}
