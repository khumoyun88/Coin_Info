import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

function HeroSection() {
  const selectedCoins = useSelector((store) => store.selectedCoinsSlice.selectedCoins);

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
        <Carousel>
          
          {selectedCoins.map((coin) => (
            <img key={coin.id} src={coin.image} alt={coin.name}  className="w-20" />
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
