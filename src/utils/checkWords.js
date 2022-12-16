export const hasLetters = (str) => {
  return /[a-zA-Z]/.test(str);
};

export const isGerman = (text) => {
  return text.includes("ä") || text.includes("ö") || text.includes("ü");
};

export const isGreek = (text) => {
  return /[\u0370-\u03FF]/.test(text);
};

export const checkLanguage = (string) => {
  if (!string) return;
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", string);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "b9bc37b335mshd6c1e71be77ca40p133a4cjsnd899834a6e59",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  try {
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      options
    )
      .then((res) => res.json())
      .then((response) => console.log(response));
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
