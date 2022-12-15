export const hasLetters = (str) => {
  return /[a-zA-Z]/.test(str);
};

export const isGerman = (text) => {
  return text.includes("ä") || text.includes("ö") || text.includes("ü");
};
