pub fn rgb(r: i32, g: i32, b: i32) -> String {
  format!(
    "{:02X}{:02X}{:02X}",
    r.clamp(0, 255),
    g.clamp(0, 255),
    b.clamp(0, 255)
  )
}
