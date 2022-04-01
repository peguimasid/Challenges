fn how_many_occurences_before_index(lst: &[u8], num_to_find: u8, limit_index: u8) -> usize {
  let mut result: usize = 0;

  for (index, number) in lst.iter().enumerate() {
    if *number == num_to_find && index <= limit_index.into() {
      result += 1
    }
  }

  result
}

fn delete_nth(lst: &[u8], n: usize) -> Vec<u8> {
  let mut result: Vec<u8> = Vec::new();

  for (index, number) in lst.iter().enumerate() {
    let occurences_before_current_index: usize =
      how_many_occurences_before_index(lst, *number, index.try_into().unwrap());

    if occurences_before_current_index <= n {
      result.push(*number)
    }
  }

  result
}

fn main() {
  println!("{:?}", delete_nth(&[20, 37, 20, 21], 1));
  println!("{:?}", delete_nth(&[1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
}
