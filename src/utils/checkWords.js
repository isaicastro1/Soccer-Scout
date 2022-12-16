export const hasLetters = (str) => {
  return /[a-zA-Z]/.test(str);
};

export const isGerman = (text) => {
  return text.includes("ä") || text.includes("ö") || text.includes("ü");
};

export const isGreek = (text) => {
  return /[\u0370-\u03FF]/.test(text);
};
