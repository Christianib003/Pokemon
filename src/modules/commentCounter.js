const commentCounter = (res) => {
  const commentNumber = `comments(${res.length ? res.length : 0})`;
  return commentNumber;
};

export default commentCounter;