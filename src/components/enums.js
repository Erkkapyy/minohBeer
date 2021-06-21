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
      text: '大坂',
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
      text: '5',
      img: null,
    },
    {
      isImage: false,
      text: '10',
      img: null,
    },
    {
      isImage: false,
      text: '8',
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

export const explanations = [
  {
    hasVideo: true,
    text:
      '山に囲まれている箕面市は、昔猿がたくさん住んでいる場所でした。' +
      '\n' +
      'そのため、箕面市の代表的な動物は猿となりました。' +
      '\n' +
      'したがって、箕面ビールの瓶には可愛いお猿さんがいます。',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    hasVideo: false,
    text: '説明 2',
    videoId: null,
  },
  {
    hasVideo: false,
    text: '箕面ビールは、大阪府の自然豊かな箕面という市で1996年から生産されています',
    videoId: null,
  },
  {
    hasVideo: true,
    text: '箕面ビールは６種と7種の季節限定で販売しています。',
    videoId: 'HPd2hiYreyc',
  },
  {
    hasVideo: true,
    text:
      '代表的な味は　箕面ビールスタウト　です。' +
      '\n' +
      'たくさんの金賞を受賞しています。' +
      '\n' +
      '箕面ビールは今日本全国で買えるので、ぜひ飲んで箕面を味わってみてください。',
    videoId: 'Nf5rGD7NdqU',
  },
];
