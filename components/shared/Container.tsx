import styled from '@emotion/styled'
import { media } from '@src/styles/media'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;

  ${media.tabletPortrait} {
    padding: 2.5rem;
  }

  ${media.tabletLandscape} {
    width: 100%;
    max-width: 1095px;
    margin: 0 auto;
    padding: 3rem;
    text-align: left;
  }
`

export const VContainer = styled(Container)`
  flex-direction: column;
`
