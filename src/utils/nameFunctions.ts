export function capitalize(input: string) {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function genderEmoji(gender: string): string {
  switch (gender?.toLowerCase()) {
    case "male":
      return "♂️";
    case "female":
      return "♀️";
    default:
      return "⚧️";
  }
}
