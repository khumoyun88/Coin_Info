import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCoin } from "../store/selectedCoinsSlice";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const selectedCoins = useSelector((store) => store.selectedCoinsSlice.selectedCoins);
  const dispatch = useDispatch(); // Correctly call useDispatch

  const sideBarTheme = {
    // Your sidebar theme settings
  };

  const handleClose = () => setIsOpen(false);

  const handleRemoveCoin = (id) => {
    dispatch(removeCoin(id)); // Correctly dispatch action
  };

  return (
    <>
      <div className="flex min-h-[2vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show</Button>
      </div>
      <Drawer className="bg-[#515151]" theme={sideBarTheme} open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Watchlist" />
        <Drawer.Items>
          <div className="flex justify-between flex-wrap mt-5">
            {selectedCoins.map((coin) => (
              <div className="text-center mb-8 w-[130px] h-[180px] rounded-[25px] bg-black" key={coin.id}>
                <img src={coin.image} alt={coin.name} className="mt-3 inline-block w-20" />
                <div className="mt-5">
                  <p>{coin.current_price}</p>
                  <button
                    onClick={() => handleRemoveCoin(coin.id)}
                    className="text-white bg-red-600 pl-2 mt-2 pr-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default Sidebar;
