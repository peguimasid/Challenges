use std::cmp;

pub fn rgb(r: i32, g: i32, b: i32) -> String {
  vec![r, g, b]
    .into_iter()
    .map(|it| format!("{:02X}", cmp::max(0, cmp::min(it, 255))))
    .collect::<Vec<String>>()
    .join("")
}
