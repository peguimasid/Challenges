pub fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
where
  T: std::iter::IntoIterator,
  T::Item: std::cmp::PartialEq + std::fmt::Debug,
  T::Item: Copy,
{
  let mut prev = None;

  let mut result = vec![];

  for val in sequence.into_iter() {
    if prev.is_none() || prev.clone().unwrap() != val {
      result.push(val.clone());
    }
    prev = Some(val);
  }
  result
}
