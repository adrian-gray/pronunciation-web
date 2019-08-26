export interface IUser {
  displayName?: string;
  id?: string;
  email?: string;
  photoURL?: string;
}

export interface IGame extends Phaser.Game {
  data?: any;
  isAuth?: boolean;
}

export interface IWordsMaze {
  tag: string;
  ipa: string;
  isUserAuth: boolean;
  words: string[];
  correct: string[];
}

export interface IFindTheWordsProps {
  isUserAuth: boolean;
  tag: string;
  ipa: string;
  isHearTheDifference: boolean;
  words: string[];
  correct: string[];
}
