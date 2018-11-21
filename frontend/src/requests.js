const fetchShortUrl = async (path, data) => {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  
  if (response.status >= 400) {
    throw(new Error('Something went wrong! Try again later.'));
  }
  return await response.json();
}

export { fetchShortUrl };
