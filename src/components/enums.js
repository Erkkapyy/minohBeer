import kingfisher from '../images/kingfisherBeer.jpg';
import thaibeer from '../images/thaiBeer.jpg';
import tigerbeer from '../images/tigarBeer.jpg';
import minohbeermonkey from '../images/minohBeerMonkey.jpg';
import ricehopale from '../images/riceHopAle.jpg';
import yuzubeer from '../images/yuzuBeer.jpg';
import stout from '../images/stout.jpg';
import imperialstout from '../images/imperialStout.jpg';

export const questions = [
  '質問 1/5: 箕面ビールのマスコットはどれですか？',
  '質問 2/5: 箕面ビールはどこで作られましたか？',
  '質問 3/5: 箕面ビールは何年に設立されましたか？',
  '質問 4/5: 箕面ビールの種類はいくつありますか？',
  '質問 5/5: 受賞歴が一番多い箕面ビールはどれですか？',
];

export const answers = [
  [
    {
      isImage: true,
      text: null,
      img: kingfisher,
    },
    {
      isImage: true,
      text: null,
      img: thaibeer,
    },
    {
      isImage: true,
      text: null,
      img: tigerbeer,
    },
    {
      isImage: true,
      text: null,
      img: minohbeermonkey,
    },
  ],
  [
    {
      isImage: false,
      text: '東京',
      img: null,
    },
    {
      isImage: false,
      text: '箕面',
      img: null,
    },
    {
      isImage: false,
      text: '沖縄',
      img: null,
    },
    {
      isImage: false,
      text: '北海道',
      img: null,
    },
  ],
  [
    {
      isImage: false,
      text: '1980年',
      img: null,
    },
    {
      isImage: false,
      text: '1996年',
      img: null,
    },
    {
      isImage: false,
      text: '2004年',
      img: null,
    },
    {
      isImage: false,
      text: '2020年',
      img: null,
    },
  ],
  [
    {
      isImage: false,
      text: '13',
      img: null,
    },
    {
      isImage: false,
      text: '33',
      img: null,
    },
    {
      isImage: false,
      text: '130',
      img: null,
    },
    {
      isImage: false,
      text: '330',
      img: null,
    },
  ],
  [
    {
      isImage: true,
      text: null,
      img: ricehopale,
    },
    {
      isImage: true,
      text: null,
      img: yuzubeer,
    },
    {
      isImage: true,
      text: null,
      img: stout,
    },
    {
      isImage: true,
      text: null,
      img: imperialstout,
    },
  ],
];

export const correctAnswerNumbers = [3, 1, 1, 0, 2];

export const explanations = ['説明 1', '説明 2', '説明 3', '説明 4', '説明 5'];
