export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

