export const TRACKS = [
  {
    id: 'concepts',
    navLabel: 'concepts',
    heading: 'AI/ML Concepts',
    description:'',
    icon: '🧠',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-600',
    cardGradient: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'evaluation',
    navLabel: 'evaluation',
    heading: 'Evaluation',
    description:
      '',
    icon: '✅',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-600',
    cardGradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'mlops',
    navLabel: 'mlops',
    heading: 'OPS',
    description:
      '',
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
