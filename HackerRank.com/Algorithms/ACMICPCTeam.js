function getTwoPeopleTeams(topics) {
  let teams = [];

  for (let i = 0; i < topics.length; i++) {
    for (let j = i; j < topics.length; j++) {
      if (i !== j) {
        let team = [topics[i], topics[j]];
        teams.push(team);
      }
    }
  }

  return teams;
}

function getMaxNumOfTopicsTeamKnows(teams) {
  let maxNumTopicsTwoPeoplesTeamKnow = 0;

  for (let team of teams) {
    const subjectOne = team[0];
    const subjectTwo = team[1];

    let topicsTeamKnow = 0;

    for (let i = 0; i < subjectOne.length; i++) {
      if (subjectOne[i] == 1 || subjectTwo[i] == 1) topicsTeamKnow++;
    }

    if (topicsTeamKnow > maxNumTopicsTwoPeoplesTeamKnow)
      maxNumTopicsTwoPeoplesTeamKnow = topicsTeamKnow;
  }

  return maxNumTopicsTwoPeoplesTeamKnow;
}

function getHowManyTeamsKnowMaxNumOfTopics(
  teams,
  maxNumTopicsTwoPeoplesTeamKnow
) {
  let teamsKnowMaxNumOfTopics = 0;

  for (let team of teams) {
    const subjectOne = team[0];
    const subjectTwo = team[1];

    let topicsTeamKnow = 0;

    for (let i = 0; i < subjectOne.length; i++) {
      if (subjectOne[i] == 1 || subjectTwo[i] == 1) topicsTeamKnow++;
    }

    if (topicsTeamKnow === maxNumTopicsTwoPeoplesTeamKnow)
      teamsKnowMaxNumOfTopics++;
  }

  return teamsKnowMaxNumOfTopics;
}

function acmTeam(topics) {
  const teams = getTwoPeopleTeams(topics);

  const maxNumTopicsTwoPeoplesTeamKnow = getMaxNumOfTopicsTeamKnows(teams);

  const teamsKnowMaxNumOfTopics = getHowManyTeamsKnowMaxNumOfTopics(
    teams,
    maxNumTopicsTwoPeoplesTeamKnow
  );

  return [maxNumTopicsTwoPeoplesTeamKnow, teamsKnowMaxNumOfTopics];
}

console.log(acmTeam(['10101', '11110', '00010']));
