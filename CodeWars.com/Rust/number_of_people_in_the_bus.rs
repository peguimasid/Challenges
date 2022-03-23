fn number(bus_stops:&[(i32,i32)]) -> i32 {
  let mut result: i32 = 0;

  for (num_people_in_the_bus, num_people_drop_the_bus) in bus_stops.iter() {
    result += num_people_in_the_bus - num_people_drop_the_bus;
  }

  result
}

fn main() {
  println!("{}", number(&[(10,0),(3,5),(5,8)]));
  println!("{}", number(&[(3,0),(9,1),(4,10),(12,2),(6,1),(7,10)]));
  println!("{}", number(&[(3,0),(9,1),(4,8),(12,2),(6,1),(7,8)]));
}

// First => num of people in the bus
// Second => Num of people drop the bus in the stop