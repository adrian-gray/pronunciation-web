import { RouteComponentProps } from "react-router-dom";

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

export interface ILoginProps {
  user: firebase.User | null;
}

interface SoundMatchParams {
  phoneme: string;
  activity: string;
}
export interface SoundProps extends RouteComponentProps<SoundMatchParams> {
  subscriptionLevel: number;
}
