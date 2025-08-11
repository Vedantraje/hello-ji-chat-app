export const extractTime = (dateString) => {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minute = padZero(date.getMinutes());

  return `${hours}:${minute}`;
};

// Helper function to pad single-digit numbers with a leading zero
const padZero = (number) => {
  return number.toString().padStart(2, "0");
};
