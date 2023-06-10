fn digits_sum(number: i64) -> i64 {
  let num_str = number.to_string();
  let chars: i64 = num_str
    .chars()
    .map(|n| n.to_digit(10).unwrap())
    .fold(0, |acc, n| acc + n as i64);

  chars
}

pub fn digital_root(n: i64) -> i64 {
  let length = n.to_string().len();

  return match length {
    len if len == 1 => n,
    _ => digital_root(digits_sum(n)),
  };
}
