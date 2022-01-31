export const delay = async (timeInMillis = 300) => {
  await new Promise((resolve) => setTimeout(resolve, timeInMillis));
};
