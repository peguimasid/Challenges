fn find_short(s: &str) -> u32 {
  let mut result = std::u32::MAX;

  for word in s.split_ascii_whitespace() {
    let len = word.chars().count().try_into().unwrap();
    if len < result {
      result = len
    }
  }

  result
}

fn main() {
  println!(
    "{}",
    find_short("bitcoin take over the world maybe who knows perhaps")
  );
}
