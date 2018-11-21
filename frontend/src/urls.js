const isUrlValid = (url) => {
  const regex = new RegExp(/^((http|https|ftp):\/\/)?\S+\.[a-zA-Z]{2,5}$/);
  return url.match(regex) ? true : false;
}

const prepareUrl = (url) => {
  const regex = new RegExp(/^((http|https|ftp):\/\/)\.*/);
  return url.match(regex) ? url : ('http://' + url);
}

export { isUrlValid, prepareUrl };
