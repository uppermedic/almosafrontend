export const truncate = (text, length, suffix) => {
  return text.substring(0, length) + suffix;
};

export const strippedContent = string => {
  return string.replace(/<\/?[^>]+>/gi, ' ');
};
