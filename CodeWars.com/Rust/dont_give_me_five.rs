fn dont_give_me_five(start: isize, end: isize) -> isize {
  let mut result: isize = 0;

  for i in start..end + 1 {
    let includes_five = i.to_string().contains('5');

    if !includes_five {
      result += 1;
    }
  }

  result
}

fn main() {
  println!("{}", dont_give_me_five(1, 9));
  println!("{}", dont_give_me_five(4, 17));
}