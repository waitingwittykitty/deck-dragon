export const countPerSuite = process.env.REACT_APP_COUNT_PER_SUITE
  ? Number(process.env.REACT_APP_COUNT_PER_SUITE)
  : 13;

export function isAce(card: CardNumber): boolean {
  return !(card % countPerSuite);
}
