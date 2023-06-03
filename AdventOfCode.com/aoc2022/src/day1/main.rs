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

  let mut calories: Vec<u32> = elfs_calories
    .into_iter()
    .map(|elf_calories| elf_calories.into_iter().sum())
    .collect();

  calories.sort_by(|a, b| b.cmp(a));

  let test = calories.into_iter().take(3).collect::<Vec<u32>>();

  test.into_iter().sum::<u32>()
}
