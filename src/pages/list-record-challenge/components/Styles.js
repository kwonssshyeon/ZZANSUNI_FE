import styled from '@emotion/styled';

export const listItemLayout = styled.div`
  /* width: 20.6875rem; */
  /* width: 20.6875rem; */
  /* height: 3.75rem; */
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  margin: 0 1rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  border-radius: 50%;
  border: 1px solid #5cc6ba;
  border-style: solid;
  stroke-width: 1px;
  stroke: var(--green--01, #5cc6ba);
  filter: drop-shadow(2px 3px 5px rgba(80, 153, 145, 0.5));
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  /* align-items: center;
  margin: 0.5rem 0;
  width: 100%; */
`;

export const ProfileImage = styled.img`
  width: 1.5rem;
`;

export const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 150px; */
  max-width: ${(props) => props.max};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
`;
