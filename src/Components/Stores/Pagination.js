import React from "react";
import Table from "./Table";

const Pagination = ({ data, pageLimit, dataLimit, faturamento, setPaginetedData }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage({ target }) {
    const pageNumber = Number(target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit);
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  React.useEffect(() => {
    setPaginetedData(getPaginatedData())
  }, [currentPage])

  return (
    <div>
      <div className="dataContainer">
        <Table data={getPaginatedData()} faturamento={faturamento}/>
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button onClick={goToNextPage} disabled={currentPage === pageLimit}>
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
