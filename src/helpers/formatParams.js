function formatParams(searchParams) {
  const pairs = [];

  for (const [key, value] of Object.entries(searchParams)) {
    if (value != null && value !== "") {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }

  return pairs.join("&");
}

export default formatParams;