fn open_or_senior(data: Vec<(i32, i32)>) -> Vec<String> {
  let mut result: Vec<String> = Vec::new();

  for (age, handicap) in data {
    let category = if age >= 55 && handicap > 7 {
      String::from("Senior")
    } else {
      String::from("Open")
    };
    result.push(category);
  }

  result
}

fn main() {
  assert_eq!(
    open_or_senior(vec![(45, 12), (55, 21), (19, -2), (104, 20)]),
    vec!["Open", "Senior", "Open", "Senior"]
  );
  assert_eq!(
    open_or_senior(vec![(3, 12), (55, 1), (91, -2), (54, 23)]),
    vec!["Open", "Open", "Open", "Open"]
  );
}
