import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage, { ProfileImageComponent } from 'components/atoms/ProfileImage';
import HeaderMenu, { HeaderMenuComponent } from "components/molecules/HeaderMenu";
import SideMenu, { SideMenuComponent } from "components/molecules/SideMenu";
import IconList, { IconListComponent, iconListProps } from 'components/molecules/IconList';
import Introduction from 'components/organisms/Introduction';
import useWindowSize from "hooks/useWindowSize";

export interface MainProps {
  profileImageLink: string;
  profileImageAlt: string;
  iconList: iconListProps.list;
}

const MainComponent = styled.div`
  height: 100%;
  padding: 60px 120px;
  display: flex;
  align-items: center;

  @media (max-width: 1199px) {
    padding: 60px 60px;
    display: grid;
    grid-template-rows: 40px minmax(350px, auto) 40px;
  }

  @media (max-width: 767px) {
    padding: 60px 30px;
  }
`;

const MainHeaderComponent = styled.div`
  height: 100%;
  display: none;
  justify-content: flex-end;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

const MainContentComponent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;

  @media (max-width: 1199px) {
    display: flex;
    justify-content: space-between;

    ${SideMenuComponent} {
      display: none;
    }
  }
`;

const MainFooterComponent = styled.div`
  height: 100%;
  display: none;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1199px) {
    display: flex;
  }
`;

const Main: FunctionComponent<MainProps> = function ({
  profileImageLink,
  profileImageAlt,
  iconList,
}) {
  const { width } = useWindowSize();

  return (
    <MainComponent>
      <MainHeaderComponent>
        <HeaderMenu />
      </MainHeaderComponent>

      <MainContentComponent>
        <Introduction profileImageLink={profileImageLink} profileImageAlt={profileImageAlt} iconList={iconList} />
        <SideMenu />
      </MainContentComponent>

      <MainFooterComponent>
        <IconList list={iconList} scale={width >= 1200 ? 1 : 0.8} />
      </MainFooterComponent>
    </MainComponent>
  );
};

export default Main;
