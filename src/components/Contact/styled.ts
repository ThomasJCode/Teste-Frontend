import styled from 'styled-components'


export default {
  Container: styled.section`
    display: flex;
    width: 100%;
    min-height: 503px;
    padding: 49px 168px 84px 198px;

    @media(max-width:768px) {
      flex-direction: column;
      padding: 0 23px;
      margin-top: 60px;
      padding-bottom: 40px;
    }
  `,
  Content: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  BoxTitleContact: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.cormorant};
    color: ${({ theme }) => theme.colors.primaryLigh};
    font-size: 38px;
    align-items: center;
    justify-content: center;
  `,
  LineContact: styled.hr`
    border-color: ${({ theme }) => theme.colors.lineBlueLight};
    width: 53px;
  `,
  BoxContainerContact: styled.div`
    display: flex;
    flex: 1;

    @media(max-width:768px) {
      flex-direction: column-reverse;
      width: 100%;
    }
  `,
  BoxLeftContact: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width:768px) {
      width: 100%;
    }
  `,
  BoxGroupContactLeft: styled.div`
    display: flex;
    flex-direction:column;
    padding-top: 40px;
    flex: 1;

    @media(max-width:768px) {
      width: 100%;
      align-items: center;
    }
  `,
  TextPhone: styled.h3`
    font-family: ${({ theme }) => theme.fonts.lato};
    color: ${({ theme }) => theme.colors.primaryLigh};
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 8px;
  `,
  TextNumberPhone: styled.p`
    font-family: ${({ theme }) => theme.fonts.lato};
    color: ${({ theme }) => theme.colors.grayRelative};
    font-size: 16px;
    font-weight: 300;
  `,
  TextEmail: styled.h3`
    font-family: ${({ theme }) => theme.fonts.lato};
    color: ${({ theme }) => theme.colors.primaryLigh};
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 8px;
    margin-top: 17px;
  `,
  TextAddressEmail: styled.p`
    font-family: ${({ theme }) => theme.fonts.lato};
    color: ${({ theme }) => theme.colors.grayRelative};
    font-size: 16px;
    font-weight: 300;
  `,
  TextInfo: styled.h3`
    font-family: ${({ theme }) => theme.fonts.lato};
    color: ${({ theme }) => theme.colors.primaryLigh};
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 8px;
    margin-top: 67px;
  `,
  BoxContact: styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    justify-content: space-between;
    width: 600px;
    height: 100%;

    @media(max-width:768px) {
      width: 100%;
      margin-top: 20px;
    }
  `,
  BoxContent: styled.div``,
  BoxButton: styled.div`
    width: 270px;

    @media(max-width:768px) {
      width: 100%;
      margin-top: 10px;
    }
  `,
  BoxButtonRight: styled.div``,
}