use std::collections::HashMap;

pub fn count_duplicates(text: &str) -> u32 {
  text
    .to_lowercase()
    .chars()
    .fold(HashMap::<char, usize>::new(), |mut acc, curr| {
      *acc.entry(curr).or_insert(0) += 1;
      acc
    })
    .values()
    .filter(|n| **n > 1)
    .count() as u32
}
