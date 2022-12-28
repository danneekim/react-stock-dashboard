const basePath = "https://finnhub.io/api/v1";

export const searchStockSymbols = async (query) => {
  // https://finnhub.io/docs/api/symbol-search
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
