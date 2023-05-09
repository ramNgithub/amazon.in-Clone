
// import React, { useEffect, useState } from 'react';
// import Navbar from '../Homepage/Navbar/Navbar';
// import Style from './Electronics.module.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router';

// const Electronics = () => {
//     const [data, setData] = useState([]);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [sort, setSort] = useState('');
//     const [page, setPage] = useState(1);
//     const [perPage, setPerPage] = useState(6);
//     const [totalPages, setTotalPages] = useState(1);
//     const navigation = useNavigate();

//     useEffect(() => {
//         axios.get(`https://amzon-mock-api.onrender.com/electronics?_page=${page}&_limit=${6}`)
//             .then(res => {
//                 let filteredData = res.data;

//                 if (selectedBrands.length > 0) {
//                     filteredData = res.data.filter(item => selectedBrands.includes(item.brand));
//                 }
//                 setData(filteredData);
//                 setTotalPages(Math.ceil(res.headers['x-total-count'] / perPage));
//             });

//     }, [selectedBrands, sort, page, perPage, totalPages]);

//     const handleSortByPrice = (a, b) => {
//         if (sort === 'lowToHigh') {
//             return a.price - b.price;
//         } else if (sort === 'highToLow') {
//             return b.price - a.price;
//         } else {
//             return 0;
//         }
//     }

//     const handelClick = (el) => {
//         localStorage.setItem('electronicItem', JSON.stringify(el));
//         navigation('/electronicsSingleItem');
//     };
//     const handleSorting = (event) => {
//         setSort(event.target.value);
//         setPage(1);
//         // setPerPage(6)
//     }
//     const handleBrandFilter = (event) => {
//         const brand = event.target.value;
//         const isChecked = event.target.checked;
//         if (isChecked) {
//             setSelectedBrands((prevState) => [...prevState, brand]);
//         } else {
//             setSelectedBrands((prevState) =>
//                 prevState.filter((selectedBrand) => selectedBrand !== brand)
//             );
//         }
//     };

//     const pageLinks = [];
//     for (let i = 1; i <= totalPages; i++) {
//         pageLinks.push(
//             <button key={i} onClick={() => setPage(i)} className={Style.pageButton}>
//                 {i}
//             </button>
//         );
//     }

import React, { useEffect, useState } from 'react';
import Navbar from '../Homepage/Navbar/Navbar';
import Style from './Electronics.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Electronics = () => {
  const [data, setData] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const navigation = useNavigate();

  useEffect(() => {
    let url = `https://amzon-mock-api.onrender.com/electronics?_page=${page}&_limit=${perPage}`;

    if (selectedBrands.length > 0) {
      url += `&brand=${selectedBrands.join('&brand=')}`;
    }

    if (sort === 'lowToHigh') {
      url += '&_sort=price&_order=asc';
    } else if (sort === 'highToLow') {
      url += '&_sort=price&_order=desc';
    }

    axios.get(url).then((res) => {
      setData(res.data);
      setTotalPages(Math.ceil(res.headers['x-total-count'] / perPage));
    });
  }, [selectedBrands, sort, page, perPage]);

  const handleSortByPrice = (a, b) => {
    if (sort === 'lowToHigh') {
      return a.price - b.price;
    } else if (sort === 'highToLow') {
      return b.price - a.price;
    } else {
      return 0;
    }
  };

  const handleClick = (el) => {
    localStorage.setItem('electronicItem', JSON.stringify(el));
    navigation('/electronicsSingleItem');
  };

  const handleSorting = (event) => {
    setSort(event.target.value);
    setPage(1);
  };

  const handleBrandFilter = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedBrands((prevState) => [...prevState, brand]);
    } else {
      setSelectedBrands((prevState) => prevState.filter((selectedBrand) => selectedBrand !== brand));
    }

    setPage(1);
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <button key={i} onClick={() => handlePageClick(i)} className={Style.pageButton}>
        {i}
      </button>
    );
  }


    return (
        <div>
            <Navbar />
            <div className={Style.mainDiv}>
                <div className={Style.sortFilterDiv}>
                    <h4>Filter By Brand</h4>
                    <input type="checkbox" value="Apple" onChange={handleBrandFilter} />
                    <span>Apple</span>
                    <br />
                    <input type="checkbox" value="Samsung" onChange={handleBrandFilter} />
                    <span>Samsung</span>
                    <br />
                    <input type="checkbox" value="Bose" onChange={handleBrandFilter} />
                    <span>Bose</span>
                    <br />
                    <input type="checkbox" value="Sony" onChange={handleBrandFilter} />
                    <span>Sony</span>
                    <br />
                    <br />
                    <h4>Sort By</h4>
                    <select value={sort} onChange={handleSorting}>
                        <option value="">Select an option</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                    </select>
                </div>
                <div className={Style.container}>
                    {data.sort(sort === '' ? () => 0 : sort === 'lowToHigh' || sort === 'highToLow' ? handleSortByPrice : () => 0).map((el) => (
                        <div
                            key={el.id}
                            onClick={() => handleClick(el)}
                            className={Style.singleDiv}
                        >
                            <img
                                className={Style.mainImg}
                                alt="Not-Found"
                                src={el.images[0].image1}
                            />
                            <div className={Style.desDiv}>
                                <h2>{el.brand}</h2>
                                <p>
                                    {el.description
                                        ? el.description.substring(0, 50) + '...'
                                        : 'Hp IdeaPad Ryzen 5 Hexa Core 5600H - (8 GB/512 GB ...)'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>{pageLinks}</div>

            </div>
        </div>
    );

};

export default Electronics;




