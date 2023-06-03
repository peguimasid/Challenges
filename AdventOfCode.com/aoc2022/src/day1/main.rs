pub fn calorie_counting() -> u32 {
  let elfs_calories: Vec<Vec<u32>> = include_str!("input.txt")
    .split("\n\n")
    .map(|food_str| {
      food_str
        .split("\n")
        .filter_map(|x| x.trim().parse().ok())
        .collect()
    })
    .collect();

  let calories: Vec<u32> = elfs_calories
    .into_iter()
    .map(|elf_calories| elf_calories.into_iter().sum())
    .collect();

  *calories.iter().max().unwrap()
}
