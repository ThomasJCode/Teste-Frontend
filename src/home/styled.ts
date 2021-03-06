import styled from "styled-components"

import BannerImg from "../assets/Banner.png"
import BannerMbImg from "../assets/mobile/banner.png"


export default {
  Container: styled.div`
    font-family: ${({ theme }) => theme.fonts.lato};

    @media(max-width:768px) {
      width: 100vw;     
      display: flex;
      flex-direction: column;
    }
  `,
  BoxBanner: styled.section`
    width: 100%;
    height: 630px;
    background-color: ${({ theme }) => theme.colors.backgroundBlack};
    background-image: url(${BannerImg});

    @media(max-width:768px) {
       width: 100%;
       height: 735px;
       background-image: url(${BannerMbImg});
       background-size: cover;
    }
  `,
  BoxButtonMobile: styled.div`
    display: none;

    @media(max-width:768px) {
      display: flex;
      position: absolute;
      top: 27px;
      right: 23px;
      color: ${({ theme }) => theme.colors.background};
      z-index: 1000;
    }
  `,
  BoxLogo: styled.div`
    display: none;

    @media(max-width:768px) {
       width: 100%;
       height: 160px;
       display: flex;
       justify-content: center;
       align-items: center;
    }
  `,
  ImageLogo: styled.img`
    display: none;

    @media(max-width:768px) {
      display: flex;
      width: 148px;
      height: 66px;
    }
  `,
  BoxGroup: styled.div`
    height: calc(100% - 111px);
    width: 410px;
    margin-left: 98px;
    padding-top: 66px;

    @media(max-width:768px) {
      max-width: 100%;
      margin-left: 0;
      padding-top: 0;
    }
  `,
  BoxTitle: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(max-width:768px) {
      padding: 23px;      
    }    
  `,
  TextInitial: styled.span`
    font-family: ${({ theme }) => theme.fonts.plafair};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 32px;
    font-style: italic;
    font-weight: normal;

    @media(max-width:768px) {
       font-size: 26px;
       text-align: left;
    }
  `,
  TextMiddle: styled.h1`
    font-family: ${({ theme }) => theme.fonts.plafair};
    color: ${({ theme }) => theme.colors.primaryOpacity};
    font-size: 90px;
    font-weight: 400;
    margin-top: -15px;
    margin-bottom: -15px;

    @media(max-width:768px) {
       font-size: 76px;
    }
  `,
  TextFinal: styled.span`
    font-family: ${({ theme }) => theme.fonts.plafair};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 32px;
    font-style: italic;
    font-weight: normal;
    text-align: right;
    margin-right: 8px;

    @media(max-width:768px) {
       font-size: 26px;
    }
  `,
  TextDescription: styled.h2`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.textClean};
    font-family: ${({ theme }) => theme.fonts.lato};
    font-weight: 300;
    margin-top: 66px;

    @media(max-width:768px) {
      padding: 0 22px;
      font-size: 22px;
    }
  `,
  BoxButton: styled.div`
    margin-top: 25px;
    width: 298px;

    @media(max-width:768px) {
      padding: 0 22px;
      width: 100%;
      margin-top: 41px;
    }
  `,
  BoxIntroduction: styled.div`
    width: 100%;
    padding-top: 10px;

    @media(max-width:768px) {
      position: absolute;
      margin-top: 725px;
      width: 100vw;
    }
  `,
  BoxAssessmentNelson: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  BoxAttributes: styled.div`
    width: 100%;

    @media(max-width:768px) {
      display: none;
    }
  `,
  BoxCondition: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  BoxTailoring: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  BoxDepoiment: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  Contact: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  Footer: styled.div`
    width: 100%;

    @media(max-width:768px) {
      width: 100vw;
    }
  `,
  MenuStatic: styled.div`
    width: 100%;
    position: fixed;
    z-index: 6000;
    top: 0;

    @media(max-width:768px) {
      display: none;
    }
  `,
}