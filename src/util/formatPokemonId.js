export default function formatPokemonId(id) {
  if (Number(id) < 10) {
    return `00${id}`;
  }
  if (Number(id) >= 10 && Number(id) <= 100) {
    return `0${id}`;
  }
  return id;
}
