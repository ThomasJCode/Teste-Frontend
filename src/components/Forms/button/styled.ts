import styled from 'styled-components'

export default {
  ButtonContainer: styled.button`
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textButton};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 18px;
    font-weight: 300;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 5000;
    cursor: pointer;

    &:hover {
      filter: opacity(0.9);
    }

    &:disabled {
      filter: opacity(0.4);
    }
  `,
}