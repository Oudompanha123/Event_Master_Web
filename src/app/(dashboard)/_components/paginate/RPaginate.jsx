import { useState } from "react";
import ReactPaginate from "react-paginate";

export const RPaginate = ({ totalData, func }) => {
  const dataArr = new Array(totalData);
  const [page, setPage] = useState(0);
  const items = dataArr
  const itemsPerPage = 8; //can change to props any-time, but cher said it should start from 8

  const passToParent = (event) => {
    console.log(event)
    setPage(event.selected)
    func(event.selected)
  }

  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => passToParent(event)}
        breakLabel="..."
        pageCount={Math.ceil(items.length / itemsPerPage)}
        previousLabel={"Prev"}
        nextLabel={"Next"}
      />
    </div>
  );
}
