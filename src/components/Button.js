import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: var(--main-red);
  text-transform: uppercase;
  color: white;
  border: none;
  outline: none;
  margin: ${props => props.primary? '0 35%' : '0'};
  padding: ${props=>props.primary? '1.2rem' : '0.8rem 1.1rem'};
  border-radius: 0.1875rem;
  font-size: ${props=>props.primary? '2rem' : '1rem'};
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: background 0.3s ease-in;
  cursor: ponter;
  &:hover {
    background: var(--main-dark);
  }
`;

