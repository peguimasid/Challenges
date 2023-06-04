#[path = "exercises/tribonacci_sequence.rs"]
mod lib;

fn main() {
  println!("{:?}", lib::tribonacci(&[0., 1., 1.], 10)); //  [0., 1., 1., 2., 4., 7., 13., 24., 44., 81.]
  println!("{:?}", lib::tribonacci(&[1., 0., 0.], 10)); //  [1., 0., 0., 1., 1., 2., 4., 7., 13., 24.]
  println!("{:?}", lib::tribonacci(&[0., 0., 0.], 10)); //  [0., 0., 0., 0., 0., 0., 0., 0., 0., 0.]
  println!("{:?}", lib::tribonacci(&[1., 2., 3.], 10)); //  [1., 2., 3., 6., 11., 20., 37., 68., 125., 230.]
  println!("{:?}", lib::tribonacci(&[3., 2., 1.], 10)); //  [3., 2., 1., 6., 9., 16., 31., 56., 103., 190.]
  println!("{:?}", lib::tribonacci(&[1., 1., 1.], 1)); //  [1.]
  println!("{:?}", lib::tribonacci(&[300., 200., 100.], 0)); //  []
}
