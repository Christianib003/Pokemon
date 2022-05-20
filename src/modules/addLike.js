const addLike = async (pokemonName) => {
  const values = JSON.stringify({
    item_id: pokemonName,
  });
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/likes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: values,
  });
};

export default addLike;