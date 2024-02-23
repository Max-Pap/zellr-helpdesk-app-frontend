export const handleGetTime = (createdAt: Date) => {
  const date = new Date(createdAt);
  return `${date.getHours()}:${date.getMinutes()}`;
};
