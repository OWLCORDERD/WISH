"use client";

import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import styled from "styled-components";

interface pageProps {
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  postMaxLength: number;
  totalDBlength: number;
  currentPage: number;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const PageList = styled.ul`
  width: max-content;
  margin: 0 2rem;

  li {
    display: inline-block;
    width: 3rem;
    text-align: center;
    line-height: 2rem;

    a {
      font-family: "TheJamsil", sans-serif;
      font-weight: 400;
      cursor: pointer;
      color: #777;

      &.active {
        font-weight: bold;
        color: #000;
      }
    }
  }
`;

const Pagenation = ({
  setCurrentPage,
  postMaxLength,
  totalDBlength,
  currentPage,
  setLoading,
}: pageProps) => {
  const [page, setPage] = useState<number[]>([]);
  const [currentViewPage, setCurrentViewPage] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const pageMaxLength = 5;
  const lastPageIndex = pageCount * pageMaxLength;
  const firstPageIndex = lastPageIndex - pageMaxLength;

  /* total DBlength 값만 존재할 시 DBlength 값을 활용하여 페이지 넘버링 */
  const pageNumbering = (DBlength: number) => {
    let pageNumberArray = [];
    if (DBlength && DBlength > 0) {
      for (let i = 1; i <= Math.ceil(DBlength / postMaxLength); i++) {
        pageNumberArray.push(i);
        setPage(pageNumberArray);
      }
    }
  };

  /* pageNumber li number 클릭 시, currentPage 값 변경 후 로딩 스피너 실행 */
  const pageTransform = (num: number) => {
    setCurrentPage(num);

    window.scrollTo(0, 0);

    setLoading(true);
  };

  useMemo(() => {
    pageNumbering(totalDBlength);
  }, [totalDBlength]);

  useEffect(() => {
    if (page.length > pageMaxLength) {
      const firstPageSlice = page.slice(firstPageIndex, lastPageIndex);
      setCurrentViewPage(firstPageSlice);
    } else if (page.length < pageMaxLength) {
      const lastPageIndex = page.length * pageCount;
      const pageSlice = page.slice(firstPageIndex, lastPageIndex);
      setCurrentViewPage(pageSlice);
    }
  }, [page]);

  const nextPage = (e: React.MouseEvent<SVGElement>) => {
    if (
      totalDBlength > 0 &&
      Math.ceil(totalDBlength / postMaxLength / pageMaxLength) > pageCount
    ) {
      setPageCount((count) => count + 1);
    }
  };

  const prevPage = (e: React.MouseEvent<SVGElement>) => {
    if (pageCount > 1) {
      setPageCount((count) => count - 1);
    }
  };

  useEffect(() => {
    if (pageCount > 1) {
      const updatePageSlice = page.slice(firstPageIndex, lastPageIndex);

      setCurrentViewPage(updatePageSlice);
    } else {
      const updatePageSlice = page.slice(firstPageIndex, lastPageIndex);

      setCurrentViewPage(updatePageSlice);
    }
  }, [pageCount]);

  return (
    <Container>
      <RiArrowLeftDoubleLine
        onClick={(e) => prevPage(e)}
        cursor='pointer'
        visibility={pageCount === 1 ? "hidden" : "auto"}
      />
      <PageList>
        {currentViewPage.map((number) => {
          return (
            <li key={number}>
              <a
                onClick={() => pageTransform(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </a>
            </li>
          );
        })}
      </PageList>
      <RiArrowRightDoubleLine
        onClick={(e) => nextPage(e)}
        cursor='pointer'
        visibility={
          totalDBlength > 0 &&
          Math.ceil(totalDBlength / postMaxLength / pageMaxLength) === pageCount
            ? "hidden"
            : "auto"
        }
      />
    </Container>
  );
};

export default Pagenation;
