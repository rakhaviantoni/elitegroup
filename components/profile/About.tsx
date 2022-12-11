import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'
import { Button } from '../shared/Button'
import Meetups from './Meetups'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: auto;

  background: #FFFFFF;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #1E1E1E;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  ${media.mobileOnly} {
    margin: 16px;
  }

  ${media.tabletLandscape} {
    span {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

const Line = styled.div`
  width: 100%;
  border: 0.5px solid #E0E0E0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

const States = styled.div`
  display: flex;
  gap: 24px;
`

const StateItem = styled.div`
  display: flex;
  gap: 8px
`

const StateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: #E0E0E0;
  border-radius: 100px;
`

const DetailedInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

const BoldInformation = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`

const Information = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #878787;

  ${media.tabletLandscape} {
    width: 388px;
  }
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${media.tabletLandscape} {
    flex-direction: row;
    gap: 24px;
  }
`

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const RatingDetail = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  inline-size: fit-content;

  ${media.tabletLandscape} {
    font-size: 12px;
    line-height: 18px;
    inline-size: max-content;
  }
`

export default function About() {
  return (
    <>
      <AboutWrapper>
        <Header>
          Xiuxian, 22
          <States>
            <StateItem>
              <StateIcon>
                <Image src="/hat.svg" alt="Hat" width={14} height={12} />
              </StateIcon>
              <span>SIM-UOL</span>
            </StateItem>
            <StateItem>
              <StateIcon>
                <Image src="/job.svg" alt="Univ" width={14} height={12} />
              </StateIcon>
              <span>Student at University</span>
            </StateItem>
          </States>
        </Header>
        <Line />
        <DetailedInformation>
          <BoldInformation>
            Age
            <br />
            Race
            <br />
            Languages
            <br />
            Height
            <br />
            Sexual Orientation
            <br />
            Meetups
            <br />
            Responsiveness (chats)
          </BoldInformation>
          <Information>
            22
            <br />
            Chinese
            <br />
            English, Mandarin
            <br />
            158cm
            <br />
            Heterosexual
            <br />
            $200 / 2h
            <br />
            Usually responds in 30 minutes
          </Information>
        </DetailedInformation>
        <Line />
        <BottomWrapper>
          <RatingWrapper>
            <span>Rating</span>
            <Image src="/rating.png" alt="Rating" width={180} height={16} />
            <RatingDetail>4.5 of 193 reviews</RatingDetail>
          </RatingWrapper>
          <Button>Reviews</Button>
        </BottomWrapper>
      </AboutWrapper>
      <Meetups />
    </>
  );
}