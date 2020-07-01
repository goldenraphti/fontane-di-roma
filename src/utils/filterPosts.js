const filterPosts = (data, settings) => {
    const posts = data.allWordpressPost.edges;
    const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];
    const regex = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/gm;
  
    const filterPostsContent = (postContent, title) => {
      const arrCleanedContent = postContent.split('>{')
        .filter(str => str[0] === '[');
      const id = cleanString(arrCleanedContent.find(str => str.includes('FOUNTAIN ID')));
      const latLong = cleanString(arrCleanedContent.find(str => str.includes('LAT-LONG')));
      const imgPath = cleanString(arrCleanedContent.find(str => str.includes('IMAGE URL')));
      const story = cleanString(arrCleanedContent.find(str => str.includes('STORY')));
      return { id, latLong, imgPath, story, title };
    }
    const arrFountains = posts.filter(({ node }) => (settings.fountainsToActivate[filterPostsContent(node.content, node.title).id] === true && regex.test(filterPostsContent(node.content, node.title).latLong))).map(({ node }) => (filterPostsContent(node.content, node.title)));
    return arrFountains;
}

export default filterPosts;
