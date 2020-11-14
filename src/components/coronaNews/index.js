import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const pagination = (pages, data) => {
    return data.slice((pages - 1) * 20, pages * 20 - 1);
  };
  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);
  // if (news.length !== 0) {
  //   console.log(news.slice(0, 20));
  // }

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Corona News</h2>
      {news.length !== 0 ? (
        pagination(page, news).map((val) => {
          return (
            <div key={val.id}>
              <p>{val.id}</p>
              <h3>
                {`${new Date(val.date).toLocaleString('default', {
                  weekday: 'long',
                })}, ${new Date(val.date).getDate()} ${new Date(
                  val.date
                ).toLocaleString('default', {
                  month: 'long',
                })} ${new Date(val.date).getFullYear()} `}
              </h3>
              {val.activity.map((v) => {
                return (
                  <div>
                    <a href={v.url}>{v.title}</a>
                    <br />
                    <br />
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      {page !== 1 ? (
        <button
          type="button"
          onClick={() => {
            return setPage(page - 1);
          }}
        >
          Back
        </button>
      ) : (
        ''
      )}
      {page !== 3 ? (
        <button
          type="button"
          onClick={() => {
            return setPage(page + 1);
          }}
        >
          Next
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default CoronaNews;
