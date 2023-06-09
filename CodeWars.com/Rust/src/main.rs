#[path = "exercises/convert_string_to_camel_case.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::to_camel_case("the-stealth-warrior")); // "theStealthWarrior"
  println!("{:?}", lib::to_camel_case("The_Stealth_Warrior")); // "TheStealthWarrior"
  println!("{:?}", lib::to_camel_case("The_Stealth-Warrior")); // "TheStealthWarrior"
}
