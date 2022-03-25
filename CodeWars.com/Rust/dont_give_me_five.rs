fn dont_give_me_five(start: isize, end: isize) -> isize {
  (start..end + 1).filter(|x| !x.to_string().contains('5')).count() as isize
}

fn main() {
  println!("{}", dont_give_me_five(1, 9));
  println!("{}", dont_give_me_five(4, 17));
}