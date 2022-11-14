import {atom} from 'recoil';

export const playingState = atom({
  key: 'playingState',
  default: false,
});

export const bgmNoState = atom({
  key: 'bgmNoState',
  default: 0,
});

export const likeModalState = atom({
  key: 'likeModalState',
  default: false,
});
