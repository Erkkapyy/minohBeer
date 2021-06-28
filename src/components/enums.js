import kingfisher from '../images/kingfisherBeer.jpg';
import thaibeer from '../images/thaiBeer.jpg';
import tigerbeer from '../images/tigarBeer.jpg';
import minohbeermonkey from '../images/minohBeerMonkey.jpg';
import ricehopale from '../images/riceHopAle.jpg';
import yuzubeer from '../images/yuzuBeer.jpg';
import stout from '../images/stout.jpg';
import imperialstout from '../images/imperialStout.jpg';

export const questions = [
  '質問 1/5: 箕面ビールのマスコットはどれですか？' +
    '\n' +
    'Which one of the following is the Minoh Beer mascot?',
  '質問 2/5: 箕面ビールはどこで作られていますか？' +
    '\n' +
    'Where is Minoh Beer being made?',
  '質問 3/5: 箕面ビールは何年に設立されましたか？' +
    '\n' +
    'In what year was the Minoh Beer company founded?',
  '質問 4/5: 箕面ビールの種類はいくつありますか？' +
    '\n' +
    'How many types of beer does Minoh Beer have?',
  '質問 5/5: 受賞歴が一番多い箕面ビールはどれですか？' +
    '\n' +
    'Which Minoh Beer received the most awards?',
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
      text: '東京' + '\n' + 'Tokyo',
      img: null,
    },
    {
      isImage: false,
      text: '大阪' + '\n' + 'Osaka',
      img: null,
    },
    {
      isImage: false,
      text: '沖縄' + '\n' + 'Okinawa',
      img: null,
    },
    {
      isImage: false,
      text: '北海道' + '\n' + 'Hokkaido',
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
    jText:
      '山に囲まれている箕面市は、昔猿がたくさん住んでいる場所でした。そのため、箕面市の代表的な動物は猿となりました。したがって、箕面ビールの瓶には可愛いお猿さんがいます。',
    eText:
      'The Minoh City used to be a place where a lot of monkeys lived. Because of that, the monkey became the representative animal of Minoh. Therefore, Minoh beers’ packages also have adorable monkeys on them.',
    videoId: 'hxAVHS1218Y',
  },
  {
    hasVideo: false,
    jText: '説明 2',
    eText: 'Explanation TBD',
    videoId: null,
  },
  {
    hasVideo: false,
    jText:
      '箕面ビールは、大阪府の自然豊かな箕面という市で1996年から生産されています。',
    eText:
      'Minoh Beer has been produced in a city rich in nature called Minoh, in Osaka Japan since the year 1996.',
    videoId: null,
  },
  {
    hasVideo: true,
    jText: '箕面ビールは６種と7種の季節限定で販売しています。',
    eText:
      'Minoh beer has 6 regular beers and also 7 types of special season beers which are sold only for a limited period of time.',
    videoId: 'LsIeOHXgY-8',
  },
  {
    hasVideo: true,
    jText:
      '代表的な味は　箕面ビールスタウトです。たくさんの金賞を受賞しています。箕面ビールは今日本全国で買えるので、ぜひ飲んで箕面を味わってみてください。',
    eText:
      'Stout is considered to be a representative of Minoh beer and has also won many awards. You can buy Minoh beer anywhere across Japan so please give it a shot!',
    videoId: 'PYqHxOgCrNc',
  },
];
