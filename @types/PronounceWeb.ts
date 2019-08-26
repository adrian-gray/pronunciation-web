import { RouteComponentProps } from "react-router-dom";

export interface IUser {
  id?: string;
  email?: string;
}

export interface IProps extends RouteComponentProps {
  subscriptionLevel: number;
  user: IUser;
}

export interface IGame extends Phaser.Game {
  data?: any;
  isAuth?: boolean;
}

export interface ILoginProps {
  user: any;
}

interface SoundMatchParams {
  phoneme: string;
  activity: string;
}
export interface ISoundProps extends RouteComponentProps<SoundMatchParams> {
  subscriptionLevel: number;
}

export interface ISoundData {
  ipa: string;
  title: string;
  tag: string;
  activities: any;
}

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
  sentences: any[];
  selectedOption: number[];
  selectedBgColour: string[];
  other?: any[];
}

export interface IOddOneOutProps {
  tag: string;
  ipa: string;
  subscription: number;
  example: string[];
  exampleHilite: number;
  rows: string[][];
  correct: string[];
}
