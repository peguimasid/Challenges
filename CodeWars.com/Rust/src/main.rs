#[path = "exercises/find_outlier.rs"]
mod my_mod;

fn main() {
  let t1 = [2, 6, 8, -10, 3];
  let t2 = [
    206847684, 1056521, 7, 17, 1901, 21104421, 7, 1, 35521, 1, 7781,
  ];
  let t3 = [std::i32::MAX, 0, 1];
  println!("{}", my_mod::find_outlier(&t1)); // 3
  println!("{}", my_mod::find_outlier(&t2)); // 206847684
  println!("{}", my_mod::find_outlier(&t3)); // 0
}
