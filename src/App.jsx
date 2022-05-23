import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import CandidateCard from "./components/CandidateCard";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [ratingordering, setRatingordering] = useState("asc");
  const [ratingOrder, setRatingOrder] = useState("asc");
  useEffect(() => {
    getdata({ page, ratingOrder });
  }, [page, ratingOrder]);
  const getdata = async ({ page, ratingOrder }) => {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:8080/candidates",
        params: {
          _page: page,
          _limit: 5,
          _order: ratingOrder,
          _sort: "salary",
        },
      });
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button
          id="SORT_BUTTON"
          title={`Sort by Ascending Salary`}
          disabled={ratingOrder === "desc"}
          onClick={() => {
            setRatingOrder("desc");
          }}
        />
        <Button
          title="PREV"
          id="PREV"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        <Button id="NEXT" title="NEXT" onClick={() => setPage(page + 1)} />
      </div>
      {data.map((item) => {
        return <CandidateCard key={item.id} list={item} />;
      })}
    </div>
  );
}