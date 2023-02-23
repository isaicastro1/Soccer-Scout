export const getDate = () => {
  let today = new Date();
  const localToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  return `${localToday.getUTCFullYear()}-${
    localToday.getUTCMonth() + 1
  }-${localToday.getUTCDate()}`;
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
  laliga: "2023-02-10",
  premier: "2023-02-28",
};
