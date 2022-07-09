fn main() {
  let (nums, boards) = include_str!("../input.txt").split_once("\n\n").unwrap();

  let boards: Vec<Vec<u32>> = boards
    .split("\n")
    .collect::<Vec<&str>>()
    .iter()
    .map(|s| {
      s.split_ascii_whitespace()
        .map(|x| x.parse::<u32>().unwrap())
        .collect::<Vec<u32>>()
    })
    .filter(|vec| !vec.is_empty())
    .collect();

  println!("{:?}", boards);
}
