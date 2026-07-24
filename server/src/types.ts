export interface Bilingual {
  en: string;
  hi: string;
}

export interface QuestionRow {
  id: string;
  subjectId: string;
  topic: string;
  year: number | null;
  difficulty: number;
  type: string;
  question: Bilingual;
  options: Bilingual[];
  answer: number;
  explanation: Bilingual;
  source: string;
  status: 'approved' | 'pending' | 'rejected';
}

export interface BlueprintSection {
  subjectId: string;
  count: number;
}

export interface Blueprint {
  id: string;
  title: Bilingual;
  durationMin: number;
  negativeMarking: number;
  sections: BlueprintSection[];
}

export interface Paper {
  id: string;
  title: string;
  blueprint: Blueprint;
  durationMin: number;
  negativeMarking: number;
  questions: QuestionRow[];
  createdAt: string;
}
