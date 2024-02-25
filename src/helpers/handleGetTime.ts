export const handleGetTime = (createdAt: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    // weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(createdAt);
};
