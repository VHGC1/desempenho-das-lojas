import React from "react";
import Table from "./Table";
import LeftArrow from "../../Assets/left.svg";
import RightArrow from "../../Assets/right.svg";
import {
  ArrowButton,
  ButtonsWrapper,
  PageButton,
  PagesWrapper,
} from "./Pagination.styled";

const Pagination = ({ data, dataLimit, faturamento, setPaginetedData }) => {
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
    let numPages = Math.ceil(data.length / dataLimit) || 1;
    return new Array(numPages).fill().map((_, idx) => 0 + idx + 1);
  };

  React.useEffect(() => {
    setPaginetedData(getPaginatedData());
    setPaginationGroup(getPaginationGroup());
  }, [data, currentPage]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return (
    <div>
      <div>
        <Table data={getPaginatedData()} faturamentoFilter={faturamento} />
      </div>

      <PagesWrapper>
        <ButtonsWrapper>
          <ArrowButton onClick={goToPreviousPage} disabled={currentPage === 1}>
            <LeftArrow />
          </ArrowButton>
          {paginationGroup.map((item, index) => (
            <PageButton
              key={index}
              onClick={changePage}
              disabled={currentPage === item}
            >
              <span>{item}</span>
            </PageButton>
          ))}

          <ArrowButton
            onClick={goToNextPage}
            disabled={currentPage === paginationGroup.length}
          >
            <RightArrow />
          </ArrowButton>
        </ButtonsWrapper>
      </PagesWrapper>
    </div>
  );
};

export default Pagination;
