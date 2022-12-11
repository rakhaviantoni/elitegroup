import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1E1E1E;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
  }

  ${media.tabletLandscape} {
    width: auto;
    background: #FFFFFF;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 16px;
    gap: 16px;
  }
`

const ImageSet = styled(Image)`
  position: relative !important;
  height: 582px !important;

  ${media.tabletLandscape} {
    height: 700px !important;
    width: 582px !important;
  }
`

const Dots = styled.div`
  display: flex;
  margin: 8px auto;
  padding: 8px 0;
  gap: 8px;

  ${media.tabletLandscape} {
    margin: 24px auto 16px;
  }
`

const Dot = styled.div<{ isActive?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? '#B2294B' : 'rgba(30, 30, 30, 0.08);'};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
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

  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
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

export default function Main() {
  return (
    <MainWrapper>
      <ImageSet src="/big-image.png" alt="Image" fill />
      <Dots>
        <Dot isActive />
        <Dot />
      </Dots>
      <Content>
        <Header>
          Xiuxian, 22
          <States>
            <StateItem>
              <StateIcon>
                <Image src="/hat.svg" alt="Hat" width={14} height={12} />
              </StateIcon>
              SIM-UOL
            </StateItem>
            <StateItem>
              <StateIcon>
                <Image src="/job.svg" alt="Univ" width={14} height={12} />
              </StateIcon>
              Student at University
            </StateItem>
          </States>
        </Header>
        <Line />
        <p>
          Gemini. Art student and tall.<br />
          Coffee, cold showers and early morning walks!
        </p>
      </Content>
    </MainWrapper>
  );
}