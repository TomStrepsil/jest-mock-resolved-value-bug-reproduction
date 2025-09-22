const reproduction = async () => {
  const url = `https://www.example.com/`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error((await response.json()).message);
  }
};

module.exports = reproduction;
