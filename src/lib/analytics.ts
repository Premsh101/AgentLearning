import { loadJSON, saveJSON } from './storage';

export interface TopicStat {
  attempts: number;
  correct: number;
}

export type TopicStats = Record<string, TopicStat>;

/** Records a single question attempt for weak-area analytics (pure code, no AI). */
export function recordAttempt(topic: string, correct: boolean): void {
  const stats = loadJSON<TopicStats>('topicStats', {});
  const s = stats[topic] ?? { attempts: 0, correct: 0 };
  s.attempts += 1;
  if (correct) s.correct += 1;
  stats[topic] = s;
  saveJSON('topicStats', stats);
}

export function getTopicStats(): TopicStats {
  return loadJSON<TopicStats>('topicStats', {});
}

export function accuracy(s: TopicStat): number {
  return s.attempts === 0 ? 0 : Math.round((s.correct / s.attempts) * 100);
}

/** Topics with the lowest accuracy (min attempts) — feeds the improvement plan. */
export function weakTopics(minAttempts = 2): { topic: string; acc: number; attempts: number }[] {
  const stats = getTopicStats();
  return Object.entries(stats)
    .filter(([, s]) => s.attempts >= minAttempts)
    .map(([topic, s]) => ({ topic, acc: accuracy(s), attempts: s.attempts }))
    .sort((a, b) => a.acc - b.acc);
}

export function totalAttempts(): { attempts: number; correct: number } {
  const stats = getTopicStats();
  return Object.values(stats).reduce(
    (acc, s) => ({ attempts: acc.attempts + s.attempts, correct: acc.correct + s.correct }),
    { attempts: 0, correct: 0 }
  );
}
