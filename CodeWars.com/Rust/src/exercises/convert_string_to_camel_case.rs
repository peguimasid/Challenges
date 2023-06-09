pub fn to_camel_case(text: &str) -> String {
  let mut result = String::from("");

  let mut should_capitalize = false;
  for c in text.chars() {
    if should_capitalize {
      result.push(c.to_ascii_uppercase());
      should_capitalize = false;
    } else if c == '-' || c == '_' {
      should_capitalize = true;
    } else {
      result.push(c);
    }
  }

  result
}
