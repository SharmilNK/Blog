export const TRACKS = [
  {
    id: 'concepts',
    navLabel: 'concepts',
    heading: 'Core Concepts',
    description:
      'Foundational and advanced ideas, told as origin stories and heists: transformers, embeddings, fine-tuning, RAG, and more.',
    icon: '🧠',
    badgeBg: 'bg-violet-100',
    badgeText: 'text-violet-600',
    cardGradient: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'evaluation',
    navLabel: 'evaluation',
    heading: 'Evaluation & Observability',
    description:
      'How we measure and watch models: BLEU, RAGAS, LLM-as-judge, drift, and monitoring, framed as courtroom dramas and audits.',
    icon: '🔎',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-600',
    cardGradient: 'from-purple-500 to-violet-600',
  },
  {
    id: 'mlops',
    navLabel: 'mlops',
    heading: 'Design and Operations',
    description:
      'Keeping models alive in production: pipelines, deployment, scaling, and cost, framed as relay races and disaster thrillers.',
    icon: '⚙️',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-600',
    cardGradient: 'from-indigo-500 to-purple-600',
  },
] as const;

export type TrackId = (typeof TRACKS)[number]['id'];

export function getTrack(id: TrackId) {
  return TRACKS.find((t) => t.id === id)!;
}
