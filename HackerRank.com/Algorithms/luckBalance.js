function luckBalance(k, contests) {
  let result = 0;

  let importants = [];

  for (let i = 0; i < contests.length; i++) {
    const currentContest = contests[i];
    const contestLucky = currentContest[0];
    const contestImportance = currentContest[1];

    if (contestImportance === 0) {
      result += contestLucky;
    } else {
      importants.push(currentContest);
    }
  }

  importants.sort((a, b) => a[0] - b[0]);

  while (importants.length > k) {
    result -= importants[0][0];
    importants.splice(0, 1);
  }

  importants.forEach((contest) => (result += contest[0]));

  return result;
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
);

console.log(
  luckBalance(2, [
    [5, 1],
    [1, 1],
    [4, 0],
  ])
);

// K = quantidade de concursos importantes que ela pode perder
// contests[i][0] = sorte que o concurso da
// contests[i][1] = importancia que o concurso tem

// A gente deve passar por todos os concursos, e economizar a sorte
// Ou seja, a gente tem sempre que fazer o minimo possivel de concursos
// ou seja, com isso a gente já não faz nenhum que tenha importancia "0"
// e dos que tem importancia "1" a gente faz o mínimo possivel para que
// o numero de concursos que a gente não fez que tenham importancia
// "1" seja igual a "K", escolhendo dos que tem importancia "1", sempre
// aqueles que vao no tirar o minimo de sorte, porque nosso objetivo é economizar sorte
