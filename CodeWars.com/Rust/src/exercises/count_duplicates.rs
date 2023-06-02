use std::collections::HashMap;

pub fn count_duplicates(text: &str) -> u32 {
  text
    .to_lowercase()
    .chars()
    .fold(HashMap::new(), |mut acc, curr| {
      *acc.entry(curr.to_string()).or_insert(0) += 1;
      acc
    })
    .into_iter()
    .filter(|(_, value)| *value > 1)
    .collect::<Vec<(String, u32)>>()
    .len()
    .try_into()
    .unwrap()
}
