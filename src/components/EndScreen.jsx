import React from 'react';
import styled from 'styled-components';
import { ExplanationContainer } from './ExplanationScreen';
import YoutubeEmbed from './YoutubeEmbed';

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 25px;
  margin-right: 25px;
`;

const EndScreen = ({ score }) => {
  return (
    <>
      <Container>
        <h1>完</h1>
        <h2>The End</h2>
        <h2>スコア (Score) : {score}/5</h2>
        <ExplanationContainer>
          <p>
            箕面ビールは、大阪府の自然豊かな箕面という市で1996年から生産されています。山に囲まれている箕面市は、昔猿がたくさん住んでいる場所でした。そのため、箕面市の代表的な動物は猿となりました。箕面ビールの瓶に可愛いお猿さんがいるのは、こういった理由です。元々ご家族は居酒屋だけ営業していましたが、毎日飲みたくなるようなビールを作りたいという気持ちで、クラフトビール作りを始めたそうです。心を込めて箕面ビールを作っていらっしゃいます。箕面ビールは６種類のクラシックな味があります。さらに、2ヶ月に1度季節限定のシーズナルビールも作って販売していて、現在はなんと１００種を超えています。代表的な味は　箕面ビールスタウトです。たくさんの金賞を受賞しています。箕面ビールは今日本全国で買えるので、ぜひ飲んで箕面を味わってみてください。
          </p>
          <p>
            Minoh beer has been produced since 1996 at Osaka’s Minoh City, which
            is known for its abundance in nature. Since Minoh had a lot of
            monkey habitats, it has become Minoh’s representative animal.
            Therefore, Minoh beers’ packages also have adorable monkeys on them.
            Originally, the family only operated an izakaya (Japanese style
            pub), but they wanted to make beer that people would want to drink
            every day, so they started making craft beer. They have put their
            heart and soul into making Minoh Beer. The beer comes in six
            different classic flavors. They also create and sell seasonal beers
            once every two months, and currently have over 100 varieties. Stout
            is considered to be a representative of Minoh beer and has also won
            many awards. You can buy Minoh beer anywhere across Japan so please
            give it a shot!
          </p>
        </ExplanationContainer>
        <YoutubeEmbed embedId='AU-7mlKn7uc' />
      </Container>
    </>
  );
};

export default EndScreen;
