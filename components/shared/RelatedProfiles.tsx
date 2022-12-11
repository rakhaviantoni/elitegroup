import styled from '@emotion/styled'
import Image from 'next/image'
import Avatar from '../profile/Avatar';
import { Button } from './Button';

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #1E1E1E;
  padding: 0 24px 16px;
  margin: 0 0 16px;
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
`

const MemberText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`

const MemberUser = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #1E1E1E;
`

const MemberDesc = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #878787;
`

export default function RelatedProfiles() {
  return (
    <Wrapper>
      <Header>You might also wanna check</Header>
      <MemberWrapper>
        <Member>
          <Avatar src="/image.png" />
          <MemberText>
            <MemberUser>
              @fight4myway
              <Image src="/badge.png" alt="Badge" width={16} height={16} />
            </MemberUser>
            <MemberDesc>
              Lorem ipsum dolor sit amet consectetur. Eu ipsum id egestas
              viverra vitae posuere netus. Nec suspendisse et sit dictum dui
              aliquet nulla quam. Tincidunt ut.
            </MemberDesc>
          </MemberText>
        </Member>
        <Member>
          <Avatar src="/image.png" isOnline />
          <MemberText>
            <MemberUser>
              @tortally_Spice
              <Image src="/badge.png" alt="Badge" width={16} height={16} />
            </MemberUser>
            <MemberDesc>
              Lorem ipsum dolor sit amet consectetur. Eu ipsum id egestas
              viverra vitae posuere netus. Nec suspendisse et sit dictum dui
              aliquet nulla quam. Tincidunt ut.
            </MemberDesc>
          </MemberText>
        </Member>
        <Member>
          <Avatar src="/image.png" isOnline />
          <MemberText>
            <MemberUser>
              @deePosh
              <Image src="/badge.png" alt="Badge" width={16} height={16} />
            </MemberUser>
            <MemberDesc>
              Lorem ipsum dolor sit amet consectetur. Eu ipsum id egestas
              viverra vitae posuere netus. Nec suspendisse et sit dictum dui
              aliquet nulla quam. Tincidunt ut.
            </MemberDesc>
          </MemberText>
        </Member>
      </MemberWrapper>
      <Button>Load more</Button>
    </Wrapper>
  );
}