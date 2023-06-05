#[path = "exercises/ones_and_zeros.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::binary_slice_to_number(&vec![0, 0, 0, 1])); //  1
  println!("{:?}", lib::binary_slice_to_number(&vec![0, 0, 1, 0])); //  2
  println!("{:?}", lib::binary_slice_to_number(&vec![1, 1, 1, 1])); //  15
  println!("{:?}", lib::binary_slice_to_number(&vec![0, 1, 1, 0])); //  6
}
