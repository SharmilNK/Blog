export const TRACKS = [
  {
    id: 'concepts',
    navLabel: 'concepts',
    heading: 'ml/ai concepts',
    description:
      'Core ideas made vivid — from gradient descent to attention mechanisms, as characters with motives.',
    icon: '🧠',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-600',
    cardGradient: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'evaluation',
    navLabel: 'evaluation',
    heading: 'evaluation',
    description:
      'How do we know if a model actually works? A courtroom drama of metrics, benchmarks, and judges.',
    icon: '✅',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-600',
    cardGradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'mlops',
    navLabel: 'mlops',
    heading: 'ml/ai ops',
    description:
      'The behind-the-scenes crew keeping models alive in production. Infrastructure as a heist film.',
    icon: '⚙️',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-600',
    cardGradient: 'from-amber-500 to-orange-500',
  },
] as const;

export type TrackId = (typeof TRACKS)[number]['id'];

export function getTrack(id: TrackId) {
  return TRACKS.find((t) => t.id === id)!;
}
