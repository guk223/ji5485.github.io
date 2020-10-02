import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text, { TextComponent } from 'components/atoms/Text';
import IconList from 'components/molecules/IconList';
import firstProfileImage from '../../../public/static/profile-image-1.jpeg';
import secondProfileImage from '../../../public/static/profile-image-2.jpg';
import thirdProfileImage from '../../../public/static/profile-image-3.jpg';
import useWindowSize from 'hooks/useWindowSize';

const PROFILE_IMAGE_LIST = [
  { src: firstProfileImage, alt: 'First Profile Image' },
  { src: secondProfileImage, alt: 'Second Profile Image' },
  { src: thirdProfileImage, alt: 'Third Profile Image' },
];
const PROFILE_ICON_LIST = [
  { href: 'https://github.com/ji5485', type: 'github' },
  { href: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
  { href: 'https://www.facebook.com/', type: 'facebook' },
  { href: '#', type: 'phone' },
  { href: '#', type: 'email' },
];

const ProfileComponent = styled.div`
  width: 100%;
`;

const ProfileImageList = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;

  img {
    width: auto;
    max-height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 250px;
  }

  @media (max-width: 767px) {
    height: 200px;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ProfileContentText = styled.div`
  ${TextComponent}:first-child {
    font-size: 25px;
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  ${TextComponent}:last-child {
    font-size: 15px;
    font-weight: 100;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

const Profile: FunctionComponent<{}> = function ({}) {
  const { width } = useWindowSize();

  return (
    <ProfileComponent>
      <ProfileImageList>
        {PROFILE_IMAGE_LIST.map(({ src, alt }, index) => (
          <img key={`profile-image-${index}`} src={src} alt={alt} />
        ))}
      </ProfileImageList>

      <ProfileContent>
        <ProfileContentText>
          <Text>Ju Hyeon Do</Text>
          <Text>Junior Web Frontend Developer</Text>
        </ProfileContentText>

        <IconList list={PROFILE_ICON_LIST} size={width >= 768 ? 20 : 17} />
      </ProfileContent>
    </ProfileComponent>
  );
};

export default Profile;
