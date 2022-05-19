export const allComments = async (item_id) => {
  try {
    const results = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/comments?item_id=${item_id}`);
    const data = await results.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const postComment = async (body) => {
  try {
    const results = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return results;
  } catch (error) {
    return error;
  }
};