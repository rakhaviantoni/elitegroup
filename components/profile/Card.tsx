import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'
import { useState } from 'react';
import Badge from '../shared/Badge';
import { OutlinePrimaryButton, PrimaryButton } from '../shared/Button';
import Status from '../shared/Status';
import Avatar from './Avatar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  background: #FFFFFF;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);

  ${media.tabletLandscape} {
    border-radius: 0px 0px 10px 10px;
  }
`

const Line = styled.div`
  border: 0.5px solid #E0E0E0;
  margin: 0 16px;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 16px 0;
  gap: 16px;

  ${media.tabletLandscape} {
    align-items: center;
  }
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 16px 16px;
  gap: 10px;
`

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  width: 100%;
`

const Username = styled.h5`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #1E1E1E;
`

const Bio = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 9px;
  line-height: 14px;
  color: #878787;
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ListIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  background: #F0F0F0;
  border-radius: 100px;
  transition: all 200ms linear;
  cursor: pointer;

  &:hover {
    background: #878787;
  }
`

export default function Card() {
  const [chatIsDisabled, setChatIsDisabled] = useState<boolean>(true)
  const [isFollowed, setIsFollowed] = useState<boolean>(false)

  return (
    <Wrapper>
      <TopWrapper>
        <AvatarWrapper>
          <Avatar src="/image.png" isOnline />
          <Badge text="Personality" />
        </AvatarWrapper>
        <Description>
          <Username>
            @xuixian_98
            <Image src="/badge.png" alt="Badge" width={16} height={16} />
          </Username>
          <Status isOnline />
          <Bio>
            İ’m your manic pixie dream girl ~ Design student and anime weeb.
            Coffee addict. Anime fan and games. Come say hi!
          </Bio>
        </Description>
        <RightWrapper>
          <ListIcon>
            <Image src="/list.svg" alt="List" width={20} height={16} />
          </ListIcon>
        </RightWrapper>
      </TopWrapper>
      <Line />
      <BottomWrapper>
        <PrimaryButton isDisabled={chatIsDisabled}>Chat</PrimaryButton>
        <PrimaryButton onClick={() => setChatIsDisabled(!chatIsDisabled)}>
          Meet
        </PrimaryButton>
        <OutlinePrimaryButton
          isActive={isFollowed}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          Follow{isFollowed && "ed"}
        </OutlinePrimaryButton>
      </BottomWrapper>
    </Wrapper>
  );
}