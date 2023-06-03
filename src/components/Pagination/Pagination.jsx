import { useState, useEffect } from "react";
import "./pagination.css";
import { GrPowerReset } from "react-icons/gr";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  const [numPage, setNumPage] = useState(currentPage);
  const [input, setInput] = useState(numPage);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value >= 0 && value <= pageNumbers.length) {
      setInput(value);
      setNumPage(value);
      paginate(value);
    } else {
      setInput(1);
      setNumPage(1);
      paginate(1);
    }
  };

  const handleBack = () => {
    if (numPage - 1 > 0) {
      const num = numPage - 1;
      setInput(num);
      setNumPage(num);
      paginate(num);
    } else {
      setInput(pageNumbers.length);
      setNumPage(pageNumbers.length);
      paginate(pageNumbers.length);
    }
  };

  const handleForward = () => {
    if (Number(numPage) + 1 <= pageNumbers.length) {
      const num = Number(numPage) + 1;
      setInput(num);
      setNumPage(num);
      paginate(num);
    } else {
      setInput(1);
      setNumPage(1);
      paginate(1);
    }
  };

  const handleReset = () => {
    paginate(1);
    setInput(1);
    setNumPage(1);
  };

  useEffect(() => {
    setInput(1);
    setNumPage(1);
  }, []);

  return (
    <div className="pagination">
      <p onClick={handleBack}>&laquo;</p>
      <input
        className="inputP"
        onChange={(e) => handleInputChange(e)}
        value={input}
      />
      <input className="inputP" value={"/" + pageNumbers.length} readOnly />
      <p onClick={handleForward}>&raquo;</p>
      <p onClick={handleReset}>
        <GrPowerReset />
      </p>
    </div>
  );
};

export default Pagination;