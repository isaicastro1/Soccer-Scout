export const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  return (today = year + "-" + mm + "-" + dd);
};
