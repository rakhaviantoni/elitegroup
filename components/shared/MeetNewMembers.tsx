import styled from '@emotion/styled'
import Image from 'next/image'
import { Button } from '../shared/Button';

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #1E1E1E;
  padding: 0 24px 16px;
  margin: 16px 0 0;
  height: max-content;
`

const Header = styled.h5`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin: 13.5px 0;
`

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`

const Member  = styled.div`
  border-top: 0.5px solid #E0E0E0;
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #1E1E1E;

  img {
    border-radius: 16px;
  }
`

const MemberText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 166px;
`

const MemberTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MemberType = styled.div<{ type: string }>`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${({ type }) => type === 'influencer' ? '#E4BC28' : '#32C08D'};
  text-transform: uppercase;

  &:after {
    content: '${({ type }) => type === 'influencer' ? 'INFLUENCER' : 'PERSONALITY'}';
  }
`

const MemberUser = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #878787;
`

export default function MeetNewMembers() {
  return (
    <Wrapper>
      <Header>Meet our new members</Header>
      <MemberWrapper>
        <Member>
          <Image src="/newmember.png" alt="New member" width={80} height={80} />
          <MemberText>
            <MemberTopWrapper>
              <MemberType type='influencer' />
              <MemberUser>@gella_97</MemberUser>
            </MemberTopWrapper>
            Online 3 min ago
          </MemberText>
        </Member>
        <Member>
          <Image src="/newmember2.png" alt="New member 2" width={80} height={80} />
          <MemberText>
            <MemberTopWrapper>
              <MemberType type='personality' />
              <MemberUser>@notstella00</MemberUser>
            </MemberTopWrapper>
            Online 7 hr ago
          </MemberText>
        </Member>
        <Member>
          <Image src="/newmember.png" alt="New member" width={80} height={80} />
          <MemberText>
            <MemberTopWrapper>
              <MemberType type='influencer' />
              <MemberUser>@deePosh</MemberUser>
            </MemberTopWrapper>
            Online a day ago
          </MemberText>
        </Member>
        <Member>
          <Image src="/newmember2.png" alt="New member 2" width={80} height={80} />
          <MemberText>
            <MemberTopWrapper>
              <MemberType type='personality' />
              <MemberUser>@deePosh</MemberUser>
            </MemberTopWrapper>
            Online a day ago
          </MemberText>
        </Member>
      </MemberWrapper>
      <Button>Load more</Button>
    </Wrapper>
  );
}