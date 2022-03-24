fn make_ascii_titlecase(mut s: String) -> String {
  if let Some(r) = s.get_mut(0..1) {
    r.make_ascii_uppercase();
  }
  if let Some(r) = s.get_mut(1..) {
    r.make_ascii_lowercase();
  }
  s.to_string()
}

fn accum(s:&str)-> String {
  let mut result = String::from("");

  for i in s.char_indices() {
    let repeated_string = String::from(i.1).repeat(i.0 + 1);

    result.push_str(&make_ascii_titlecase(repeated_string));
    if i.0 != s.chars().count() - 1 {
      result.push('-')
    }
  }

  result
}

fn main() {
  println!("{}", accum("ZpglnRxqenU"));
}

// ANOTHER SOL

// fn accum(s:&str)->String {
//   s.chars().enumerate()
//       .map(|(i,c)|c.to_string().to_uppercase() + c.to_string().to_lowercase().repeat(i).as_str())
//       .collect::<Vec<String>>()
//       .join("-")
// }