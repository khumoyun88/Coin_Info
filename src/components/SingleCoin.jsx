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
    <div className="flex">
            <div className="w-1/4   border-r-4 border-white">
                <div className="mt-5 text-center">
                    <img className=" inline-block w-1/3" src={coin.image.large} alt={coin.name} />
                    <h1 className="mt-2 mb-6 font-bold text-3xl">{coin.name} ({coin.symbol.toUpperCase()})</h1>
                </div>
                <p className="text-sm text-gray-500">{coin.description.en}</p>
                <div>
                    <p className="inline-blok">Rank:</p>
                    <p className="inline-blok">{coin.market_cap_rank}</p>
                </div>
                <div>
                    <p>Current Price:</p>
                    <p>{coin.current_price}</p>
                </div>
                <div>
                    <p>Market Cap:</p>
                    <p>{coin.market_cap}</p>
                </div>

            </div>

            <div className="w-3/4">
                <div className="w-full h-full">
                    <LineChart/>
                </div>
            </div>
    </div>

  );
}
