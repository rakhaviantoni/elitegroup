import styled from '@emotion/styled'
import Image from 'next/image'

const Wrapper = styled(Image)<{ isOnline: boolean }>`
  border-radius: 50%;
  border: 1px solid ${({ isOnline }) => isOnline ? '#32C08D' : '#E4BC28'};
  padding: 2px;
`

export default function Avatar({
  src,
  isOnline = false
}: {
  src: string
  isOnline?: boolean
}) {
  return (
    <Wrapper src={src} alt="Image" width={66} height={66} isOnline={isOnline} />
  );
}