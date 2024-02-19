import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ExecutionContext, FastOmit } from 'styled-components/dist/types';

type SlideBackgroundProtocol = ExecutionContext &
  FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never> & {
    background: string;
  };

const SlideBackground = styled.article<SlideBackgroundProtocol>`
  background-image: url(${(prop) => prop.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: opacity(15%);
`;

export { SlideBackground };
