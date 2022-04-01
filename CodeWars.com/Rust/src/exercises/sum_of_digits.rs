fn sum_digits(n: i64) -> i64 {
  let mut result = 0;
  let mut n = n;

  while n != 0 {
    result += n % 10;
    n /= 10;
  }

  result
}

pub fn digital_root(n: i64) -> i64 {
  if n < 10 {
    n
  } else {
    digital_root(sum_digits(n))
  }
}
