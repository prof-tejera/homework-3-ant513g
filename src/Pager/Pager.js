import { Component } from 'react';
import './Pager.css';

class Pager extends Component {
  render() {
    const { href, className} = this.props;
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pageNumber = pages.map(l => {
      return (
        <span className="page-container">
          <a
            href="#"
            className={"pager"}
            onClick={() => {}}
            key={l}
          >
            {l}
          </a>
        </span>
      );
    });
    return (
      <>
        <span class="page-container">
          <a href="#" className="pager previous">&laquo;</a>
        </span>
        {pageNumber}
        <span class="page-container">
          <a href="#" className="pager next">&raquo;</a>
        </span>
      </>
    );
  }
}

export default Pager;
