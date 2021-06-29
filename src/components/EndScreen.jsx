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
            箕面ビールは、大阪府の自然豊かな箕面という市で1996年から生産されています。山に囲まれている箕面市は、昔猿がたくさん住んでいる場所でした。そのため、箕面市の代表的な動物は猿となりました。したがって、箕面ビールの瓶には可愛いお猿さんがいます。箕面ビールは６種のレギュラーと7種の季節限定で販売しています。代表的な味は　箕面ビールスタウトです。たくさんの金賞を受賞しています。箕面ビールは今日本全国で買えるので、ぜひ飲んで箕面を味わってみてください。
          </p>
          <p>
            Minoh beer has been produced since 1996 at Osaka’s Minoh City, which
            is known for its abundance in nature. Since Minoh had a lot of
            monkey habitats, it has become Minoh’s representative animal.
            Therefore, Minoh beers’ packages also have adorable monkeys on them.
            Minoh beer has 6 regular beers and also 7 types of special season
            beers which are sold only for a limited period of time. Stout is
            considered to be a representative of Minoh beer and has also won
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
