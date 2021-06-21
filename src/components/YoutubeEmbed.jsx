import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YoutubeEmbedDiv = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin-bottom: 50px;
`;

const YoutubeEmbedIframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const YoutubeEmbed = ({ embedId }) => (
  <YoutubeEmbedDiv className='video-responsive'>
    <YoutubeEmbedIframe
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </YoutubeEmbedDiv>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
