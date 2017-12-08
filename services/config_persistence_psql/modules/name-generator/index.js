const adjectives = [
  'Amazing',
  'Awesome',
  'Blithesome',
  'Excellent',
  'Fabulous',
  'Fantastic',
  'Favorable',
  'Fortuitous',
  'Great',
  'Incredible',
  'Ineffable',
  'Mirthful',
  'Outstanding',
  'Perfect',
  'Propitious',
  'Remarkable',
  'Smart',
  'Spectacular',
  'Splendid',
  'Stellar',
  'Stupendous',
  'Super',
  'Ultimate',
  'Unbelievable',
  'Wondrous',
  'Dancing'
]

const nouns = [
  'Afterthought',
  'Snail',
  'Wind',
  'Morning',
  'Dew',
  'Zen',
  'Silver',
  'Wisdom',
  'Passenger',
  'Quiver',
  'Basin',
  'Love',
  'Danger',
  'Titanium',
  'Nancy',
  'Saga',
  'Serenity',
  'Spartan',
  'Forest',
  'Draft',
  'Magic'
]

export default function generateName () {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]

  return adjective + ' ' + noun
}
