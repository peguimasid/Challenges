pub fn tribonacci(signature: &[f64; 3], n: usize) -> Vec<f64> {
  let mut result = signature.clone().to_vec();

  if n < 3 {
    return result[0..n].to_vec();
  }

  for i in 0..(n - 3) {
    result.push(result[i] + result[i + 1] + result[i + 2]);
  }

  result
}
