import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedCoins } from "../store/selectedCoinsSlice";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
// import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";  // Importing Pagination component

export default function Coins() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  // State for current page
  const coinsPerPage = 10;  // Number of coins to display per page
  const selectedCoins = useSelector((store) => store.selectedCoinsSlice.selectedCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedSelectedCoins = JSON.parse(localStorage.getItem("selectedCoins")) || [];
    dispatch(updateSelectedCoins(savedSelectedCoins));

    async function fetchCoins() {
      const response = await fetch(
        // "https://api.coingecko.com/api/v3/coins/bitcoin"
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=249&page=1&sparkline=false&price_change_percentage=24h"
      );
      const data = await response.json();
      setCoins(data);
    }

    fetchCoins();
  }, [dispatch]);

  const selectUnselectCoin = (coin) => {
    const isCoinSelected = selectedCoins.some((selected) => selected.id === coin.id);
    let updatedSelectedCoins;

    if (isCoinSelected) {
      updatedSelectedCoins = selectedCoins.filter((c) => c.id !== coin.id);
    } else {
      updatedSelectedCoins = [...selectedCoins, coin];
    }

    dispatch(updateSelectedCoins(updatedSelectedCoins));
    localStorage.setItem("selectedCoins", JSON.stringify(updatedSelectedCoins));
  };

  // Calculate coins for the current page
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  const tableTheme = {
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-6 py-3 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg "
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "bg-blue-700 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg  dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-[#242424] even:bg-[#242424] odd:dark:bg-[#242424] even:dark:bg-gray-700 border-b border-gray-500 "
    }
  }

  const paginationTheme ={
    "base": "",
    "layout": {
      "table": {
        "base": "text-sm text-gray-700 dark:text-gray-400",
        "span": "font-semibold text-gray-900 dark:text-white"
      }
    },
    "pages": {
      "base": " xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      "showIcon": "inline-flex",
      
      "previous": {
        "base": " bg-inherite px-3 py-2 leading-tight text-white",
        "icon": "h-5 w-5"
      },
      "next": {
        "base": " bg-inherite px-3 py-2 leading-tight text-white",
        "icon": "h-5 w-5"
      },
      "selector": {
        "base": "p-3   bg-inherite py-2 leading-tight text-white text-[10px]   dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 ",
        "active": "bg-gray-600 text-white-600 rounded-full  dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        "disabled": "cursor-not-allowed opacity-50"
      }
    }
  }

  return (
    <div>
      <HeroSection carouselElements={coins.slice(0, 8)} />

      <h2 className="mt-10  pt-4 pb-4 text-2xl text-center">Cryptocurrency Prices by Market Cap</h2>

      <div className="max-w-[1140px] mx-auto mt-4">
        <Table theme={tableTheme} striped>
          <TableHead>
            <TableHeadCell className="bg-[#87CEEB]">Coin</TableHeadCell>
            <TableHeadCell className="bg-[#87CEEB]">Price</TableHeadCell>
            <TableHeadCell className="bg-[#87CEEB]">24h change</TableHeadCell>
            <TableHeadCell className="bg-[#87CEEB]">Market cap</TableHeadCell>
          </TableHead>
          <TableBody>
            {currentCoins.map((c) => (
              <TableRow key={c.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <Link to={`/coin/${c.id}`}>
                    <div className=" flex">
                      <img src={c.image} alt={c.name} className="w-10 h-10 cursor-pointer" />
                      <div className="ml-3 ">
                        <p className="text-[18px] text-white uppercase">{c.symbol}</p>
                        <p className="text-[10px] uppercase text-gray-400">{c.name}</p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>$ {c.current_price}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => selectUnselectCoin(c)}
                      style={{
                        paddingRight: "15px",
                        cursor: "pointer",
                        color: selectedCoins.some((selected) => selected.id === c.id) ? "green" : "inherit",
                      }}
                    />
                    <p style={{ color: c.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                      {c.price_change_percentage_24h.toFixed(2)}
                    </p>
                  
                  </div>
                </TableCell>
                <TableCell>${c.market_cap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-center mt-4">
          <Pagination
            theme={paginationTheme}
            currentPage={currentPage}
            totalPages={Math.ceil(coins.length / coinsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
