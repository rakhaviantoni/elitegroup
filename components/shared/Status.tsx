import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #1E1E1E;
`;

const Rounded = styled.div<{ isOnline: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ isOnline }) =>
    isOnline
      ? "linear-gradient(113.76deg, #45c99a 20.81%, #32c08d 90.36%)"
      : "#E4BC28"};
`;

export default function Status({ isOnline }: { isOnline: boolean }) {
  return (
    <Wrapper>
      <Rounded isOnline={isOnline} />
      {isOnline ? "Online" : "Offline"} now
    </Wrapper>
  );
}