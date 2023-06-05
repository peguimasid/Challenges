pub fn binary_slice_to_number(slice: &[u32]) -> u32 {
  let bin_str = slice
    .to_vec()
    .into_iter()
    .map(|val| val.to_string())
    .into_iter()
    .collect::<String>();
  u32::from_str_radix(bin_str.as_str(), 2).unwrap()
}
