import { atom, RecoilState } from 'recoil';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const favoritesAtom: RecoilState<any> = atom({
  key: 'favorites',
  default: []
});
