import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { ExecutionContext } from 'styled-components';
import { FastOmit } from 'styled-components/dist/types';

type BackgroundStyleProtocol = ExecutionContext &
  FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & {
    background: string;
    margin: string;
  };

export const BackgroundCard = styled.span<BackgroundStyleProtocol>`
  background-image: url(${(prop) => prop.background});
  background-position: 50%;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 4px 4px 20px rgb(0 0 0 / 0.4);
  margin-top: ${(prop) => prop.margin};
  height: 600px;
`;
