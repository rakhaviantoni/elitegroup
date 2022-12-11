import styled from '@emotion/styled'
import { media } from '@src/styles/media'
import { useState } from 'react';
import About from './About';
import Main from './Main';

const TabsWrapper = styled.div``

const TabsMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 16px;

  ${media.tabletLandscape} {
    margin: 16px 0 24px;
  }
`

const TabItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13.55px 8px;
  width: 100%;
  text-align: center;
  color: ${({ isActive }) => isActive && '#B2294B'};
  border-bottom: 1px solid ${({ isActive }) => isActive ? '#B2294B' : '#E0E0E0'};
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  ${media.tabletLandscape} {
    font-size: 14px;
    line-height: 21px;
  }
`;

interface TabItem {
  title: string
  isActive: boolean
}

export default function Tabs() {
  const [tabs, setTabs] = useState<TabItem[]>([{
    title: "Main",
    isActive: false
  }, {
    title: "About",
    isActive: true
  }, {
    title: "Posts",
    isActive: false
  }])
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <TabsWrapper>
      <TabsMenu>
        {tabs.map((menu, i) => (
          <TabItem isActive={activeTab === i} onClick={() => setActiveTab(i)}>
            {menu.title}
          </TabItem>
        ))}
      </TabsMenu>
      {activeTab === 0 && <Main />}
      {activeTab === 1 && <About />}
    </TabsWrapper>
  );
}