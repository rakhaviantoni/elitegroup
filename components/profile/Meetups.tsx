import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

const Wrapper = styled.div`
  color: #1E1E1E;
  margin: 27.5px 16px;

  ${media.tabletLandscape} {
    margin: 40px 0;
  }
`

const Header = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0E0E0;
`

const MeetupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;

  ${media.tabletLandscape} {
    gap: 24px;
  }
`

const Meetup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  ${media.tabletLandscape} {
    gap: 16px;
  }
`

const MeetupIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;

  background: #F7EAED;
  border-radius: 10px;

  img {
    width: 26px !important;
    height: 26px !important;
  }

  ${media.tabletLandscape} {
    width: 67px;
    height: 67px;
  }
`

const MeetupText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 292px;

  h5 {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #878787;
  }

  ${media.tabletLandscape} {
    width: auto;
    h5 {
      font-size: 14px;
      line-height: 21px;
    }

    span {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export default function Meetups() {
  return (
    <Wrapper>
      <Header>Meetups</Header>
      <MeetupWrapper>
        <Meetup>
          <MeetupIcon>
            <Image src="/rocket.svg" alt="Rocket" width={32} height={32} />
          </MeetupIcon>
          <MeetupText>
            <h5>Recent Updates</h5>
            <span>I’m free today 10:30 am - 3 pm, coming from West. Open to try any area and place!</span>
          </MeetupText>
        </Meetup>
        <Meetup>
          <MeetupIcon>
            <Image src="/availability.svg" alt="Availability" width={32} height={32} />
          </MeetupIcon>
          <MeetupText>
            <h5>Availability</h5>
            <span>Flexi but preferably weekdays! Please arrange at least two days in advance.</span>
          </MeetupText>
        </Meetup>
        <Meetup>
          <MeetupIcon>
            <Image src="/activities.svg" alt="Activities" width={32} height={32} />
          </MeetupIcon>
          <MeetupText>
            <h5>Activities</h5>
            <span>Cafe, bar, picnic, anything easy going!</span>
          </MeetupText>
        </Meetup>
        <Meetup>
          <MeetupIcon>
            <Image src="/food.svg" alt="Food" width={32} height={32} />
          </MeetupIcon>
          <MeetupText>
            <h5>Food Preferences</h5>
            <span>Pasta and sushi</span>
          </MeetupText>
        </Meetup>
      </MeetupWrapper>
    </Wrapper>
  );
}