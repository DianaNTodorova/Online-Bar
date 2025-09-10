import type { ReactElement, ReactNode } from "react";
import "../styles/Pagination.css";


interface IPaginationProps {
  currentPage: number;
  loading: boolean;
  next: () => void;
  pageCount: number;
  previous: () => void;
}

export const Pagination = ({
  currentPage,
  loading,
  next,
  pageCount,
  previous,
}: IPaginationProps): ReactElement => {

//Pagination logic here
  const renderPagination = (): ReactNode => {
    if (loading) {
      return (
        <li className="page-item disabled">
          <span className="page-link">
            <p>Loading...</p>
          </span>
        </li>
      );
    }

    return Array.from({ length: pageCount }, (_, i) => {
      const page = i + 1;
      return (
        <li key={page} className={`page-item text-success ${page === currentPage ? "active" : ""}`}>
          <button
            className="page-link border-1 fw-normal "
            onClick={() => {
              if (page < currentPage) {
                previous();
              } else if (page > currentPage) {
                next();
              }
            }}
          >
            {page}
          </button>
        </li>
      );
    });
  };

  return (
    <nav aria-label="Page navigation text-success border-2 ">
      <ul className="pagination justify-content-center text-success ">
     
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link text-success border-1 fw-normal" onClick={previous} disabled={currentPage === 1}>
            &laquo;
          </button>
        </li>
        {renderPagination()}
        <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
          <button className="page-link text-success border-1 fw-normal " onClick={next} disabled={currentPage === pageCount}>
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
