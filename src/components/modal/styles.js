import { Button } from 'antd';

import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

export const CustomButton = styled(Button)`
  background-color: var(--color-green-01);
`;
