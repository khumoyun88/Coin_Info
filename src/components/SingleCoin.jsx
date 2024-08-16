import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "./LineChart/Linechart";

export default function SinglCoin() {
  const { id } = useParams(); // Get the coin ID from the URL
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    async function fetchCoinDetail() {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      const data = await response.json();
      setCoin(data);
    }

    fetchCoinDetail();
  }, [id]);

  if (!coin) return <div>Loading...</div>;

  return (
    <div className="flex mt-10">
            <div className="w-1/4 ml-5 mr-5   border-r-2 border-white">
                <div className="mt-5 text-center">
                    <img className=" inline-block w-1/3" src={coin.image.large} alt={coin.name} />
                    <h1 className="mt-2 mb-6 font-bold text-3xl">{coin.name} ({coin.symbol.toUpperCase()})</h1>
                </div>
                
                
                <p className="text-sm text-gray-500">{coin.description.en}</p>
                
                <div className="mt-5">
                    <p className="inline  mr-5">Rank:</p>
                    <p className="inline">{coin.market_cap_rank}</p>
                </div>
                <div className="mt-5" >
                    <p className="inline  mr-5" >Current Price:</p>
                    <p className="inline" >{coin.current_price}</p>
                </div>
                <div className="mt-5" >
                    <p className="inline  mr-5" >Market Cap:</p>
                    <p className="inline">{coin.market_cap}</p>
                </div>

            </div>

            <div className="w-3/4 ml-5 mr-5">
                <div className="w-full h-full">
                    <LineChart/>
                    <div className="flex mt-10 justify-between">
                      <button className="py-1 px-20 flex  bg-[#87CEEB] text-black">24 Hour</button>
                      <button className="py-1 px-20   border border-color-[#87CEEB] text-white"> 30 Days</button>
                      <button className="py-1 px-20   border border-color-[#87CEEB] text-white">3 Months</button>
                      <button className="py-1 px-20   border border-color-[#87CEEB] text-white">1 Year</button>
                    
                    </div>
                </div>
            </div>
    </div>

  );
}
