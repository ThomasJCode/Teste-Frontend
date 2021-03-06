import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primaryLigh};
  border-radius: 2px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  z-index: 5000;

  input {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 14px;
    border: 0;
    width: 100%;
    margin: 0 20px;
    outline: 0;
  }
`;