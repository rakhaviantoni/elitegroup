import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  gap: 16px;

  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  background: #FFFFFF;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);

  ${media.tabletLandscape} {
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    text-align: center;

    span {
      align-self: stretch;
      flex-grow: 1;
    }
  }
`

export default function Top({
  withBackIcon,
  text
}: {
  withBackIcon?: boolean;
  text: string
}) {
  return (
    <Wrapper>
      {withBackIcon && (
        <Image src="/left-icon.svg" alt="Left icon" width={24} height={24} />
      )}
      <span>{text}</span>
    </Wrapper>
  );
}