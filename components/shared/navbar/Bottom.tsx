import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import Image from 'next/image'

const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 16px;

  background: #FFFFFF;
  box-shadow: 0px -0.5px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ${media.tabletLandscape} {
    position: relative;
  }
`

const NavbarMenu = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 28px;

  span {
    display: none;
  }

  ${media.tabletLandscape} {
    width: 164px;
    padding: 13.5px 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${({ isActive }) => isActive && '#B2294B'};

    border-bottom: ${({ isActive }) => isActive && '1px solid #B2294B'};

    img {
      display: none;
    }

    span {
      display: block;
    }
  }
`;

export default function Bottom() {
  const Menu = [{
    src: "/home.svg",
    title: "Home",
    isActive: false
  }, {
    src: "/search.svg",
    title: "Explore",
    isActive: true
  }, {
    src: "/feed.svg",
    title: "Feed",
    isActive: false
  }, {
    src: "/schedule.svg",
    title: "Scheduled",
    isActive: false
  }]

  return (
    <BottomWrapper>
      {Menu.map((menu) => (
        <NavbarMenu key={menu.title} isActive={menu.isActive}>
          <Image src={menu.src} alt={menu.title} width={24} height={24} />
          <span>{menu.title}</span>
        </NavbarMenu>
      ))}
    </BottomWrapper>
  );
}