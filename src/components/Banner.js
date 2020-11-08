import React from 'react';
import Daredevil from '../images/Daredevil.jpg';
import vip from '../images/vip.jpg';
import Strangerthings from '../images/Strangerthings.jpg';
import moneyheist from '../images/moneyheist.jpg';
import reasons from '../images/reasons.jpg';
import './Banner.css';

function Banner() {
    const random = Math.floor(Math.random() * 5);
    const banner = {
        0: {
            image: vip,
            title: "Velaiyilla Pattathar",
            description: "Velaiilla Pattadhari ( transl. Unemployed Graduate), popularly referred to as VIP, is a 2014 Indian Tamil-language masala film written,and filmed by Velraj, in his directorial debut. The film features Dhanush, Amala Paul, while Vivek, Saranya Ponvannan, Samuthirakani and Surbhi play supporting roles.",
        },
        1: {
            image: Daredevil,
            Title: "Daredevil",
            description: "Marvel's Daredevil, or simply Daredevil, is an American streaming television series created for Netflix by Drew Goddard, based on the Marvel Comics character of the same name.",
        },
        2: {
            image: Strangerthings,
            Title: "Stranger Things",
            description: "SeasonsTV Thrillers. When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. Starring:Winona Ryder, David Harbour, Finn Wolfhard. Creators.",
        },
        3: {
            image: moneyheist,
            Title: "Money Heist",
            description: "Money Heist (Spanish: La casa de papel, \"The House of Paper\") is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain.",
        },
        4: {
            image: reasons,
            Title: "13 Reasons Why",
            description: "13 Reasons Why (stylized onscreen as TH1RTEEN R3ASONS WHY) is an American teen drama streaming television series developed for Netflix by Brian Yorkey, based on the 2007 novel Thirteen Reasons Why by Jay Asher.",
        },
    };

    return (
        <header className="banner">
            <div className="banner__contents">
                <h1 className="banner__title">{banner[3].Title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {banner[3].description}
                </h1>
            </div>

            <div className="banner__fade"/>
        </header>
    )
}

export default Banner
