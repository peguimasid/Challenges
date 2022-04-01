fn usdcny(usd: u16) -> String {
  let cny_to_dollar: f64 = 6.75;
  let result = usd as f64 * cny_to_dollar;

  return format!("{:.2} Chinese Yuan", result);
}

fn main() {
  println!("{}", usdcny(14));
}
