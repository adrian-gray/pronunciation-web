export interface INewsStoriesCustomProps {
  title: string;
  headline: string;
  sentences: string[];
  options: string[];
  answers: string[];
  userAuth: number;
  other: any[];
}

export interface INewsStoriesCustomState {
  sentences: string[];
  selectedOption: number[];
  selectedBgColour: string[];
  other: any[];
}
