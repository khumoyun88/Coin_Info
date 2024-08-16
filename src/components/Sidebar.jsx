import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCoin } from "../store/selectedCoinsSlice";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const selectedCoins = useSelector((store) => store.selectedCoinsSlice.selectedCoins);
  const dispatch = useDispatch(); 

  const sideBarTheme = {
    
  "root": {
    "base": "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800",
    "backdrop": "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
    "edge": "bottom-16",
    "position": {
      "top": {
        "on": "left-0 right-0 top-0 w-full transform-none",
        "off": "left-0 right-0 top-0 w-full -translate-y-full"
      },
      "right": {
        "on": "right-0 top-0 h-screen w-80 transform-none",
        "off": "right-0 top-0 h-screen w-80 translate-x-full"
      },
      "bottom": {
        "on": "bottom-0 left-0 right-0 w-full transform-none",
        "off": "bottom-0 left-0 right-0 w-full translate-y-full"
      },
      "left": {
        "on": "left-0 top-0 h-screen w-80 transform-none",
        "off": "left-0 top-0 h-screen w-80 -translate-x-full"
      }
    }
  },
  "header": {
    "inner": {
      "closeButton": "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      "closeIcon": "h-4 w-4",
      "titleIcon": "me-2.5 h-4 w-4",
      "titleText": "mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
    },
    "collapsed": {
      "on": "hidden",
      "off": "block"
    }
  },
  "items": {
    "base": ""
  }
  };

  const handleClose = () => setIsOpen(false);

  const handleRemoveCoin = (id) => {
    dispatch(removeCoin(id)); 
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
                <div className=" mt-5">
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
