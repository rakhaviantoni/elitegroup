import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

export const Button = styled.button<{ height?: number; isDisabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;

  background: #F0F0F0;
  border: 0;
  border-radius: 100px;

  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  color: ${({ isDisabled }) => isDisabled ? '#878787' : '#1E1E1E'};
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '38px'};
  transition: all 200ms ease;

  cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};

  &:hover {
    background: ${({ isDisabled }) => isDisabled ? '#F0F0F0' : '#1E1E1E'};
    color: ${({ isDisabled }) => isDisabled ? '#878787' : '#FBF4F6'};
  }

  ${media.tabletLandscape} {
  }
`;

export const PrimaryButton = styled(Button)<{ height?: number; isDisabled?: boolean }>`
  background: ${({ isDisabled }) => isDisabled ? '#F0F0F0' : '#FBF4F6'};
  color: ${({ isDisabled }) => isDisabled ? '#878787' : '#B2294B'};
  height: ${({ height }) => height ? `${height}px` : '38px'};

  &:hover {
    background: ${({ isDisabled }) => isDisabled ? '#F0F0F0' : '#B2294B'};
    color: ${({ isDisabled }) => isDisabled ? '#878787' : '#FBF4F6'};
  }
`

export const OutlineButton = styled(Button)<{ height?: number; isDisabled?: boolean }>`
  background: ${({ isDisabled }) => isDisabled ? '#F0F0F0' : '#FFFFFF'};
  border: ${({ isDisabled }) => isDisabled ? '0' : '1px solid #D9D9D9'};
  height: ${({ height }) => height ? `${height}px` : '38px'};
`

export const OutlinePrimaryButton = styled(PrimaryButton)<{ height?: number; isDisabled?: boolean; isActive?: boolean }>`
  background: ${({ isDisabled, isActive }) => isDisabled ? '#F0F0F0' : (isActive ? '#B2294B' : '#FFFFFF')};
  color: ${({ isDisabled, isActive }) => isDisabled ? '#878787' : (isActive ? '#FFFFFF' : '#1E1E1E')};
  border: ${({ isDisabled, isActive }) => isDisabled ? '0' : (isActive ? '0' : '1px solid #D9D9D9')};
  height: ${({ height }) => height ? `${height}px` : '38px'};
`