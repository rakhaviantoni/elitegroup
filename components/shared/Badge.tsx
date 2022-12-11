import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;

  background: #eaf9f4;
  border: 1px solid #32c08d;
  border-radius: 100px;

  font-weight: 600;
  font-size: 9px;
  line-height: 14px;

  color: #32c08d;
  text-transform: uppercase;

  ${media.tabletLandscape} {
  }
`;

export default function Badge({ text }: { text: string }) {
  return <Wrapper>{text}</Wrapper>;
}