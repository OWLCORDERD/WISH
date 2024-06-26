"use client";

import { db } from "component/fetchDB/firebase";
import Loading from "component/fetchDB/loading/Loading";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "styles/notice.scss";
import { NoticeType } from "../page";

const CurrentNotice = ({ params }: any) => {
  const notice_id = params.idx;
  const [loading, setLoading] = useState<boolean>(true);
  const [uploadDate, setUploadDate] = useState<string | undefined>();
  const [currentNoticeData, setCurrentNoticeData] = useState<
    NoticeType | undefined
  >();

  const findNotice = async () => {
    const ref = doc(db, "notice", notice_id);

    const docSnapshot = await getDoc(ref);

    if (docSnapshot.exists()) {
      const docData = {
        id: docSnapshot.id,
        title: docSnapshot.data()["title"],
        writer: docSnapshot.data()["writer"],
        image: docSnapshot.data()["image"],
        date: docSnapshot.data()["date"].toDate(),
        text: docSnapshot.data()["text"],
        view_cnt: docSnapshot.data()["view_cnt"],
      };

      setCurrentNoticeData(docData);
    } else {
      return null;
    }

    setLoading(false);
  };

  useEffect(() => {
    if (notice_id) {
      findNotice();
    }
  }, [notice_id]);

  useEffect(() => {
    if (currentNoticeData && currentNoticeData.date) {
      const date = currentNoticeData.date;

      let month = date.getMonth() + 1;
      let day = date.getDate();
      const filterMonth = month < 10 ? "0" + month : month;
      const filterDay = day < 10 ? "0" + day : day;
      const formatDate =
        date.getFullYear() + "-" + filterMonth + "-" + filterDay;

      setUploadDate(formatDate);
    }
  }, [currentNoticeData]);

  return (
    <div className='wrap'>
      <section className='current-NoticeBoard'>
        {!loading && currentNoticeData ? (
          <>
            <div className='currentBoard-header'>
              <span className='static'>공지사항</span>
              <h1 className='title'>{currentNoticeData.title}</h1>
            </div>

            <div className='currentBoard-info'>
              <h2 className='currentBoard-writer'>
                {currentNoticeData.writer}
              </h2>
              <span className='currentBoard-date'>{uploadDate}</span>
            </div>

            <div className='currentBoard-text'>
              {currentNoticeData.text.split("\n").map((keyword) => {
                return (
                  <p key={currentNoticeData.id}>
                    {keyword}
                    <br />
                  </p>
                );
              })}
            </div>

            {currentNoticeData.image ? (
              <div className='upload-imageBox'>
                <div className='upload-image'>
                  <Image
                    src={currentNoticeData.image}
                    alt='공지사항 이미지'
                    width='400'
                    height='500'
                  />
                </div>
              </div>
            ) : null}

            <div className='currentNotice-button'>
              <div className='NoticeList-button'>
                <Link href='/notice'>목록으로</Link>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default CurrentNotice;
