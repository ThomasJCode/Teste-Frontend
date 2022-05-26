import styled from 'styled-components'

export default {
    ButtonContainer: styled.button`
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryLigh};
    border: 1px solid ${({ theme }) => theme.colors.primaryLigh};
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 18px;
    font-weight: 300;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 5000;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.textGolden};
      color: ${({ theme }) => theme.colors.textGolden};
    }
  `,
}