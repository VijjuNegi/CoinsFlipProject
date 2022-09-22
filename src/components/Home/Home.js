import React, { useState } from "react";

// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
import Card from "../UI/Card/Card";
import classes from "../../utils/css/components/Home.module.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Home = (props) => {
  const [coins, setCoins] = useState();

  const coinsHandle = (event) => {
    setCoins(() => {
      console.log(event.target.value);
    });
  };
  return (
    <div>
      <Card className={classes.home}>
        <h1>Welcome back! hello</h1>
      </Card>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <CurrencyExchangeIcon />
            <div className="row"></div>
            <div className="row">
              <h2 className="text-center">I LIKE</h2>
              <div className="col text-center">
                <button
                  onClick={coinsHandle}
                  value={coins}
                  className={classes.mainButton}
                >
                  HEADS
                </button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>TAILS</button>
              </div>
            </div>
            <div className="row mt-2">
              <h2 className="text-center">FOR</h2>
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
              <div className="col text-center">
                <button className={classes.mainButton}>click</button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <button className={classes.mainButton}>
                  DOUBLE OR NOTHING
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <Card className={classes.home}>
      <h1>Welcome back! hello</h1>
      {/* <CurrencyBitcoinIcon /> */
}
//  </Card> */}
