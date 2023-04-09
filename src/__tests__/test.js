import checkHealth from '../index';

// test('checking health', () => {
//   const character = { name: 'Knight', health: 75 };
//   expect(checkHealth(character)).toBe('healthy');
// });

test.each([
  ['healthy',
    {
      name: 'Mage',
      health: 70,
    }, 'healthy'],
  ['wounded',
    {
      name: 'Swordman',
      health: 25,
    }, 'wounded'],
  ['critical',
    {
      name: 'Bowman',
      health: 12,
    }, 'critical'],
])('testing health with each option', (_, character, wellbeing) => {
  const result = checkHealth(character);
  expect(result).toBe(wellbeing);
});
