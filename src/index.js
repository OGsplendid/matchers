export default function rangeByHealth(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
