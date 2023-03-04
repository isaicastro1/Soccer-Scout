export const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  return (today = year + "-" + mm + "-" + dd);
};

export const modifyDate = (date) => {
  if (!date) return;
  return (
    date.replaceAll("-", "/").slice(0, 10).substr(6) + "/" + date.substr(0, 4)
  );
};

export const modifyTime = (time) => {
  if (!time) return;
  return time.split("").slice(11, -9).join("");
};

export const leagueDates = {
  champions: "2023-04-30",
  laliga: "2023-03-20",
  premier: "2023-03-20",
  copaDelRey: "2023-04-30",
};
