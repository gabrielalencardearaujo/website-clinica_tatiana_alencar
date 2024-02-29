import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { ExecutionContext } from 'styled-components';
import { FastOmit } from 'styled-components/dist/types';

type BackgroundStyleProtocol = ExecutionContext &
  FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & {
    background: string;
    margin?: string;
    borderRadius?: string;
    boxShadow?: string;
    Position?: string;
  };

export const BackgroundCard = styled.div<BackgroundStyleProtocol>`
  background-image: url(${(prop) => prop.background});
  background-position: ${(prop) => (!prop.Position ? '50%' : prop.Position)};
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: ${(prop) => (!prop.borderRadius ? '20px' : prop.borderRadius)};
  box-shadow: ${(prop) => (!prop.boxShadow ? '4px 4px 20px rgb(0 0 0 / 0.4)' : prop.boxShadow)};
  margin-top: ${(prop) => prop.margin};
  height: 600px;
`;
