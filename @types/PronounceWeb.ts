export interface NewsStoriesCustomProps {
  title: string;
  headline: string;
  sentences: string[];
  options: string[];
  answers: string[];
  userAuth: number;
  other: any[];
}

export interface NewsStoriesCustomState {
  sentences: string[];
  selectedOption: number[];
  selectedBgColour: string[];
  other: any[];
}
