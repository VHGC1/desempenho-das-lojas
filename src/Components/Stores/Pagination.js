import React from "react";
import Table from "./Table";
import LeftArrow from "../../Assets/left.svg";
import RightArrow from "../../Assets/right.svg";

const Pagination = ({
  data,
  dataLimit,
  faturamento,
  setPaginetedData,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [paginationGroup, setPaginationGroup] = React.useState([]);

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
    let numPages = Math.round(data.length / dataLimit) || 1;
    return new Array(numPages).fill().map((_, idx) => 0 + idx + 1);
  };

  React.useEffect(() => {
    setPaginetedData(getPaginatedData());
    setPaginationGroup(getPaginationGroup());
  }, [data, currentPage]);

  return (
    <div>
      <div>
        <Table data={getPaginatedData()} faturamentoFilter={faturamento} />
      </div>

      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          <img src={LeftArrow} alt="left" />
        </button>
        {paginationGroup.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            disabled={currentPage === item}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          disabled={currentPage === paginationGroup.length}
        >
          <img src={RightArrow} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
