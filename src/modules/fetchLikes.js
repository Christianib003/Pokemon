const fetchLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/likes/');
  const results = await response.json();
  return results;
};

export default fetchLikes