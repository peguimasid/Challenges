fn number(bus_stops:&[(i32,i32)]) -> i32 {
  bus_stops.iter().fold(0, |acc, stop| acc + stop.0 - stop.1)
}

fn main() {
  println!("{}", number(&[(10,0),(3,5),(5,8)]));
  println!("{}", number(&[(3,0),(9,1),(4,10),(12,2),(6,1),(7,10)]));
  println!("{}", number(&[(3,0),(9,1),(4,8),(12,2),(6,1),(7,8)]));
}

// First => num of people in the bus
// Second => Num of people drop the bus in the stop