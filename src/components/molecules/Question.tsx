import React, { FunctionComponent } from 'react';
import Icon, { IconComponent } from 'components/atoms/Icon';
import Text, { TextComponent } from 'components/atoms/Text';
import styled from '@emotion/styled';
import shortId from 'utilities/shortId';

interface QuestionProps {
  icon: 'smileWink' | 'running' | 'layerGroup' | 'userTie';
  title: string[];
  content: string[];
}

export const QuestionComponent = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 25px;

  body.dark & {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  ${IconComponent} {
    color: #5c7cfa;
    margin-bottom: 20px;
  }

  ${TextComponent} {
    font-size: 18px;
    font-weight: 700;
  }

  body.dark & {
    ${IconComponent} {
      color: #748ffc;
    }
  }
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
`;

const Question: FunctionComponent<QuestionProps> = function ({ icon, title, content }) {
  return (
    <QuestionComponent>
      <TitleBox>
        <Icon size={60} type={icon} />
        <div>
          {title.map((text) => (
            <Text key={shortId()}>{text}</Text>
          ))}
        </div>
      </TitleBox>

      <Content>
        {content.map((text) => (
          <Text key={shortId()}>{text}</Text>
        ))}
      </Content>
    </QuestionComponent>
  );
};

export default Question;
