"use client";

import Footer from "component/Main/Footer";
import Navbar from "component/Main/Navbar";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import "styles/notice.scss";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { commonService } from "component/fetchDB";
import { NoticeType } from "app/notice/page";
import axios from "axios";

const page = () => {
  const params = useSearchParams();

  const query: string | null = params ? params.get("id") : null;

  const router = useRouter();

  const [noticeDB, setNoticeDB] = useState<NoticeType[]>([]);
  const [currentDB, setCurrentDB] = useState<NoticeType[]>([]);

  const fetchNotice = async () => {
    const res = await axios.get("http://localhost:3000/api/viewNotice", {
      params: {
        selectAll: "all",
      },
    });

    if (res.status === 200) {
      const { data } = res.data;

      setNoticeDB(data);
    }
  };

  const currentNotice = useCallback(() => {
    const result: NoticeType[] = noticeDB.filter(
      (item) => item.idx === Number(query)
    );

    setCurrentDB(result);
  }, [noticeDB]);

  useEffect(() => {
    fetchNotice();
  }, []);

  useEffect(() => {
    currentNotice();
  }, [noticeDB]);

  const beforeDB = noticeDB.filter((item) => item.idx === Number(query) - 1);

  const beforeNotice = (e: React.MouseEvent<HTMLDivElement>) => {
    if (beforeDB) {
      setCurrentDB(beforeDB);

      const beforeIndex: number = Number(query) - 1;

      router.push(`http://localhost:3000/currentNotice?id=${beforeIndex}`);
    }
  };

  const nextNotice = (e: React.MouseEvent<HTMLDivElement>) => {
    if (nextDB) {
      setCurrentDB(nextDB);

      const nextIndex: number = Number(query) + 1;

      router.push(`http://localhost:3000/currentNotice?id=${nextIndex}`);
    }
  };

  const nextDB = noticeDB.filter((item) => item.idx === Number(query) + 1);

  return (
    <div className='wrap'>
      <Navbar />
      <section className='currentNotice-container'>
        <div className='current-header'>
          <h1 className='currentHeader-title'>공지사항</h1>
        </div>
        <div className='current-NoticeBoard'>
          <h1 className='currentBoard-title'>{currentDB[0]?.title}</h1>

          <div className='currentBoard-info'>
            <h2 className='currentBoard-writer'>{currentDB[0]?.writer}</h2>
            <span className='currentBoard-date'>
              {currentDB[0]?.date.slice(0, 10)}
            </span>
          </div>

          <div className='currentBoard-text'>
            {currentDB[0]?.text.split("\n").map((keyword) => {
              return (
                <p>
                  {keyword}
                  <br />
                </p>
              );
            })}
          </div>

          <div className='upload-imageBox'>
            <div className='upload-image'>
              <img src={currentDB[0]?.image} alt='' />
            </div>
          </div>

          <div className='currentNotice-button'>
            <div className='Notice-shortCut'>
              <div className='next-Notice'>
                {nextDB[0] ? (
                  <>
                    <span>다음 글</span>

                    <div
                      className='nextNotice-title'
                      onClick={(e) => nextNotice(e)}
                    >
                      {nextDB[0]?.title}
                    </div>
                  </>
                ) : null}
              </div>

              <div className='before-Notice'>
                {beforeDB[0] ? (
                  <>
                    <span>이전 글</span>

                    <div
                      className='beforeNotice-title'
                      onClick={(e) => beforeNotice(e)}
                    >
                      {beforeDB[0]?.title}
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            <div className='NoticeList-button'>
              <Link href='/notice'>목록으로</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;