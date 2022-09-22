import React, { useState } from "react";
import classes from "../../utils/css/components/Coins.module.css";
function ActiveButtons() {
  const [coins, setCoins] = useState([]);
  const buttons = ["HEADS", "TAILS"];

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
}

export default ActiveButtons;
