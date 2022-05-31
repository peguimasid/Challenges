const domaninsTypes = {
  org: 'organization',
  com: 'commercial',
  net: 'network',
  info: 'information',
};

function solution(domains) {
  return domains.map((domain) => domaninsTypes[domain.split('.').pop()]);
}

console.log(
  solution(['en.wiki.org', 'codesignal.com', 'happy.net', 'code.info'])
);
