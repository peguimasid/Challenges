pub fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
where
  T: std::iter::IntoIterator,
  T::Item: std::cmp::PartialEq + std::fmt::Debug,
{
  let mut v: Vec<_> = sequence.into_iter().collect();
  v.dedup();
  v
}
