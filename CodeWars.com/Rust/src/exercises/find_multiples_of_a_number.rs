pub fn find_multiples(n: u32, limit: u32) -> Vec<u32> {
  let mut result: Vec<u32> = Vec::new();

  for number in n..=limit {
    if number % n == 0 {
      result.push(number);
    }
  }
  result
}
