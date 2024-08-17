import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

function HeroSection() {
  const selectedCoins = useSelector((store) => store.selectedCoinsSlice.selectedCoins);

  const CaruselTheme = {
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    }
  }

  return (
    <div 
    style={{
      backgroundImage: `url('/bg_img.jpeg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className=" pt-10 h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <h1 className="text-4xl text-[#87CEEB] text-center font-bold">CRYPTOFOLIO WATCH LIST</h1>
      {selectedCoins.length > 0 ? (
        <Carousel >
          
          {selectedCoins.map((coin) => (
            <div className="text-center" key={coin.id}>
              <img  src={coin.image} alt={coin.name}  className="w-20 inline-block" />
              <div >
                <p className="text-[18px] text-white uppercase inline ">{coin.symbol}</p>
                <p className="inline ml-3" style={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>{coin.price_change_percentage_24h.toFixed(2) }</p>
              </div>
              <p>{coin.current_price}</p>
            </div>
          

          ))}
        </Carousel>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p>No coins selected.</p>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
