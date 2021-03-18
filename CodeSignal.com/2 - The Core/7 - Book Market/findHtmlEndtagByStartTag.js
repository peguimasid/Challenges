// My bad solution
function htmlEndTagByStartTag(startTag) {
  const tagSplited = startTag.split('<')

  const tag = tagSplited[1].split(' ')

  let endTag = tag[0]

  if(endTag[endTag.length - 1] === '>') {
    return `</${endTag}`
  }

  return `</${endTag}>`
}

// better
const htmlEndTagByStartTag = startTag =>
  `</${startTag.match(/\w+/)}>`;

console.log(htmlEndTagByStartTag("<i>"))