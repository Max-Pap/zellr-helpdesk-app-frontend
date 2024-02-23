export const adjustHeight = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.style.height = "inherit";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }
};
