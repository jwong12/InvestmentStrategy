import './Main.scss';
import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Main() {
    const [bankroll, setBankroll] = useState(2000);
    const [profitTarget, setProfitTarget] = useState(100);
    const [winPercentage, setWinPercentage] = useState(60);
    const [wagerPercentage, setWagerPercentage] = useState(20);
    const [options, setOptions] = useState({
        title: {
          text: 'Line Graph'
        },
        series: [{
            name: 'Simulation',
            data: []
        }],
        xAxis: {
            title: {
                text: 'Number of Bets'
            }
        },
        yAxis: {
            title: {
                text: 'Total Bankroll'
            }
        },
    });

    function simulateData() {
        const winDecimal = winPercentage / 100;
        const wagerDecimal = wagerPercentage / 100;
        
        const bankrollData = [];
        let totalBankroll = bankroll;

        while ((totalBankroll < bankroll + profitTarget) && bankrollData.length < 10001) {
            if (totalBankroll <= 0) {
                break;
            }

            const bet = totalBankroll *  wagerDecimal;

            if (isBetWon(winDecimal)) {
                totalBankroll += bet;

            } else {
                totalBankroll -= bet;
            }

            bankrollData.push(parseInt(totalBankroll.toFixed(2)));
        }

        setOptions({ series: [{ 
            name: 'Simulation',
            data: bankrollData
        }] })
    }

    function isBetWon(winDecimal) {
        const rand = Math.random();

        if (rand <= winDecimal) {
            return true
        }

        return false;
    }

    function handleOnChange(event) {
        if (event.target.name === "bankroll") {
            setBankroll(parseInt(event.target.value));

        } else if (event.target.name === "profit") {
            setProfitTarget(parseInt(event.target.value));

        } else if (event.target.name === "win") {
            setWinPercentage(event.target.value);
            setWagerPercentage(Number((((event.target.value / 100 * 2) - 1) * 100).toFixed(2)));
        }
    }

    return (
        <div>
            <h1>Kelly's Law</h1>
            <div className="information-box">
                <div className="info-detail">
                    <label>Bankroll</label>
                    <div className="input-wrapper">$<input name="bankroll" type="number" min="0" onChange={handleOnChange} value={bankroll}/></div>
                </div>
                <div className="info-detail">
                    <label>Profit Target</label>
                    <div className="input-wrapper">$<input name="profit" type="number" min="0" onChange={handleOnChange} value={profitTarget}/></div>
                </div>
                <div className="info-detail">
                    <label>Win Percentage</label>
                    <div className="input-wrapper-win"><input name="win" id="win" min="50" max="100" onChange={handleOnChange} value={winPercentage}/>%</div>
                </div>
                <div className="info-detail">
                    <label>Wager Percentage</label>
                    <div className="input-wrapper-wager"><input disabled value={wagerPercentage}/>%</div>
                </div>
                <div className="button-simulate-wrapper"><button onClick={simulateData}>Simulate</button></div>
            </div>
            <div className="line-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    updateArgs={[true]}
                />
            </div>
        </div>
    );
}