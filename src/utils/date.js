export const getDate = (date) => {
  let newDate = new Date(date);
  let dd = String(newDate.getDate()).padStart(2, "0");
  let mm = String(newDate.getMonth() + 1).padStart(2, "0");
  let year = newDate.getFullYear();
  return (newDate = year + "-" + mm + "-" + dd);
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

export const removeSecondsFromTime = (time) => {
  if (!time) return;
  return time.replace(":00", "");
};

export const leagueDates = {
  champions: "2023-05-30",
  laliga: "2023-04-20",
  premier: "2023-04-20",
  copaDelRey: "2023-04-30",
};
