import styled from "styled-components";

const ClothesPeed: any = {};

ClothesPeed.Container = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  padding: 3.125rem 6.25rem;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    padding: 3.125rem;
  }

  @media screen and (max-width: 768px) {
    padding: 3.125rem 1rem;
  }
`;

ClothesPeed.TitleBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
`;

ClothesPeed.Title = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  line-height: 5rem;
  text-align: center;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

ClothesPeed.Info = styled.p`
  width: 100%;
  font-size: 13px;
  font-family: "Noto Sans KR", sans-serif;
  text-align: center;
  line-height: 3rem;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

ClothesPeed.PeedWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 4rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 0;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

ClothesPeed.ProductItem = styled.div`
  position: relative;
  width: 25rem;
  height: 40rem;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    height: 35rem;
  }

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 25rem;
  }
`;

ClothesPeed.ProductImg = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    height: 25rem;
  }

  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;

ClothesPeed.ProductInfo = styled.div`
  width: 100%;
  height: 10rem;
  font-family: "Noto Sans KR", sans-serif;
`;

ClothesPeed.ProductTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 4rem;
  font-size: 15px;
  word-break: keep-all;
  font-weight: 400;
  color: #878787;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

ClothesPeed.ProductMall = styled.p`
  width: 100%;
  font-size: 12px;
  line-height: 2rem;
  text-transform: uppercase;
  font-weight: 400;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

ClothesPeed.ProductPrice = styled.span`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  line-height: 4rem;

  @media screen and (min-width: 1440px) and (max-width: 1900px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

ClothesPeed.ViewMoreContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  margin: 3rem 0;
`;

ClothesPeed.ViewMoreButton = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 20rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    margin-bottom: 1rem;
  }

  &.remove {
    display: none;
  }
`;

export { ClothesPeed };