import styled from 'styled-components'

export default {
    ButtonContainer: styled.button`
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonSecondaryText};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.lato};
    font-size: 18px;
    font-weight: 300;
    border-radius: 2px;
    justify-content: center;
    display: flex;
    z-index: 5000;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.tertiary};
      border: 1px solid ${({ theme }) => theme.colors.tertiary};
    } `,
}