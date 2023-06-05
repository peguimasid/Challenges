pub fn binary_slice_to_number(slice: &[u32]) -> u32 {
  slice.iter().fold(0, |acc, bit| (acc << 1) | bit)
}
