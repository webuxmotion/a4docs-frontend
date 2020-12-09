import uniqueId from "./uniqueId";

function newAlias(title, aliases) {
  let newTitle = `${title}-${uniqueId()}`;

  if (!(aliases.indexOf(newTitle) > -1)) { 
    return newTitle 
  } else { 
    return newAlias(title, aliases) 
  }
}

const createAlias = (title, aliases) => {
  const lowerTitle = title.split(" ").join("-").toLowerCase();

  if (!(aliases.indexOf(lowerTitle) > -1)) return lowerTitle;

  return newAlias(lowerTitle, aliases);
}

export default createAlias;
