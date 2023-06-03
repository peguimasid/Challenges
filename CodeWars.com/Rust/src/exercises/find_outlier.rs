pub fn find_outlier(values: &[i32]) -> i32 {
  let vec = Vec::from(values);

  let even: Vec<i32> = vec
    .clone()
    .into_iter()
    .filter(|val| *val % 2 == 0)
    .collect();
  let odd: Vec<i32> = vec
    .clone()
    .into_iter()
    .filter(|val| *val % 2 != 0)
    .collect();

  if odd.len() < even.len() {
    odd[0]
  } else {
    even[0]
  }
}
