import React, { useState } from "react";
import classes from "../../utils/css/components/Coins.module.css";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const buttons = ["OS SOL", "0.1 SOL", "25 SOL", "0.5 SOL", "1 SOL", "2 SOL"];

  return buttons.map((key) => {
    const isActive = coins.includes(key);

    return (
      <>
        <span>
          <button
            className={classes.mainButton}
            key={key}
            onClick={() =>
              setCoins(
                isActive
                  ? coins.filter((current) => current !== key)
                  : [coins, key]
              )
            }
            style={{ background: isActive ? "#4f005f" : "#741188" }}
          >
            {key}
          </button>
        </span>
      </>
    );
  });
};

export default Coins;
