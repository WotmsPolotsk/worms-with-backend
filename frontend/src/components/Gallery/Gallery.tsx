import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import { Container, Row, Col } from "react-bootstrap";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator/Separator";
import { Gallery1, Gallery2, Video } from "@worms/assets";
import { Title } from "@worms/common/Title";
import { Play } from "@worms/assets";
import { PlayStyled, VideoStyled, VideoWrapper } from "./styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "@worms/hooks/useDetectClickOutside";

export interface InstagramVideoProps {
  url: string;
}

export const VideoComponent = (props: InstagramVideoProps) => {
  const { url } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { isClickOutside } = useDetectClickOutside(wrapperRef);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1;
    }
  }, []);

  const onVideoClick = useCallback(() => {
    if (videoRef.current) {
      setIsVideoPlaying(!isVideoPlaying);

      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    if (isClickOutside && videoRef.current) {
      setIsVideoPlaying(false);

      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isClickOutside]);

  return (
    <VideoWrapper ref={wrapperRef} onClick={onVideoClick}>
      <VideoStyled ref={videoRef} loop>
        <source src={url} />
      </VideoStyled>
      <PlayStyled src={Play} isVisible={!isVideoPlaying} />
    </VideoWrapper>
  );
};

export const renderVideoUrl = (video: {
  original: string;
  thumbnail: string;
  renderItem: (item: ReactImageGalleryItem) => React.ReactNode;
}) => {
  return <VideoComponent url={video.original} />;
};

export const Gallery = () => {
  const images = [
    {
      thumbnail: `${Video}`,
      original: `${Video}`,
      renderItem: renderVideoUrl.bind(this),
    },
    {
      original: Gallery1,
      thumbnail: Gallery1,
    },
    {
      original: Gallery2,
      thumbnail: Gallery2,
    },
  ];

  return (
    <Separator isTopPadding bgColor="#fff">
      <Container>
        <Row>
          <FlexWrapper alignItems="center" width="100%" flexDirection="column">
            <Col>
              <Title>Взгляните на наше производство</Title>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <ImageGallery
                lazyLoad
                showFullscreenButton={false}
                showPlayButton={false}
                items={images}
              />
            </Col>
          </FlexWrapper>
        </Row>
      </Container>
    </Separator>
  );
};
