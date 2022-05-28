import { atom, RecoilState } from 'recoil';

export const favoritesAtom: RecoilState<any> = atom({
  key: 'favorites',
  default: []
});
