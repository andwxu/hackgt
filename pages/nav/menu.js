import styles from '../../styles/Menu.module.css'
import { useSpring, animated } from 'react-spring';
import React, {useState} from 'react';
import Link from 'next/link'

let clicked = [false, false, false, false, false, false, false, false];
let orders = [
    "Southern Marinated Fried Chicken",
    "Turkey Drumstick Osso Bucco",
    "Whole Red Snapper and Bajan Green Sauce",
    "Roasted Beet Salad",
    "Smoked Pork Belly",
    "Vegan Peach Cobbler",
    "Lemonade",
    "Sweet Tea",
];
let prices = [
    23,
    25,
    38,
    17,
    24,
    10,
    3,
    3,
];

export default function Menu() {
    const [background0, setBackground0] = useState("#fff");
    const [background1, setBackground1] = useState("#fff");
    const [background2, setBackground2] = useState("#fff");
    const [background3, setBackground3] = useState("#fff");
    const [background4, setBackground4] = useState("#fff");
    const [background5, setBackground5] = useState("#fff");
    const [background6, setBackground6] = useState("#fff");
    const [background7, setBackground7] = useState("#fff");

    let cardStyle0 = {
        backgroundColor: `${background0}`,
    }
    let cardStyle1 = {
        backgroundColor: `${background1}`,
    }
    let cardStyle2 = {
        backgroundColor: `${background2}`,
    }
    let cardStyle3 = {
        backgroundColor: `${background3}`,
    }
    let cardStyle4 = {
        backgroundColor: `${background4}`,
    }
    let cardStyle5 = {
        backgroundColor: `${background5}`,
    }
    let cardStyle6 = {
        backgroundColor: `${background6}`,
    }
    let cardStyle7 = {
        backgroundColor: `${background7}`,
    }




    const handleClick = (param) => {
        switch(param) {
            case 0:
                if (clicked[0]) {
                    setBackground0('#fff');
                } else {
                    setBackground0('#c4c4c4')
                }
                break;
            case 1:
                if (clicked[1]) {
                    setBackground1('#fff');
                } else {
                    setBackground1('#c4c4c4')
                }
                break;
            case 2:
                if (clicked[2]) {
                    setBackground2('#fff');
                } else {
                    setBackground2('#c4c4c4')
                }
                break;
            case 3:
                if (clicked[3]) {
                    setBackground3('#fff');
                } else {
                    setBackground3('#c4c4c4')
                }
                break;
            case 4:
                if (clicked[4]) {
                    setBackground4('#fff');
                } else {
                    setBackground4('#c4c4c4')
                }
                break;
            case 5:
                if (clicked[5]) {
                    setBackground5('#fff');
                } else {
                    setBackground5('#c4c4c4')
                }
                break;
            case 6:
                if (clicked[6]) {
                    setBackground6('#fff');
                } else {
                    setBackground6('#c4c4c4')
                }
                break;
            default:
                if (clicked[7]) {
                    setBackground7('#fff');
                } else {
                    setBackground7('#c4c4c4')
                }
                break;
        }
        clicked[param] = !clicked[param];
    }

    async function order() {
        let orderFood = "";
        let orderPrice = 0;
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i]) {
                orderFood += orders[i] + ",";
                orderPrice += prices[i];
            }
        }
        orderFood = orderFood.substring(0, orderFood.length - 1);
        console.log(orderFood);
        console.log(orderPrice);

        const res = await fetch('/api/order/orders', {
            method: 'POST',
            body: JSON.stringify({ 
                "user": "ppunmaneeluk",
                "date": `${Math.round(new Date() / 1000)}`,
                "order": `${orderFood}`,
                "comments": "",
                "price": `${orderPrice}`,
                "delivery": "dine-in" 
            }), headers: {
              'Content-Type': 'application/json',
            },
          })
    }

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.header_text}>Twisted Soul Cookhouse</h1>
                <img className={styles.header_img} src="/twistedmain.webp" />
                <div className={styles.header_overlay}></div>
            </div>
            <div className={styles.info}>
                <h1 className={styles.info_add}>1133 Huff Rd NW, Ste D, Atlanta, GA 30318</h1>
                <h1 className={styles.info_desc}>$$ | Southern | 1.7 mi</h1>
                <h1 className={styles.info_desc}>Hours: 12 PM - 10 PM</h1>
                <h1 className={styles.info_time}>Estimated Time</h1>
                <div className={styles.info_grid}>
                    <div className={styles.info_items}>
                        <p className={styles.info_items_text}>Dine In</p>
                        <div className={styles.info_bubble}>25 min</div>
                    </div>
                    <div className={styles.info_items}>
                        <p className={styles.info_items_text}>Curbside</p>
                        <div className={styles.info_bubble}>35 min</div>
                    </div>
                    <div className={styles.info_items}>
                        <p className={styles.info_items_text}>Delivery</p>
                        <div className={styles.info_bubble}>50 min</div>
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <h1 className={styles.menu_header}>Menu</h1>
                <div className={styles.card} style={cardStyle0} onClick={() => handleClick(0)}>
                    <img className={styles.card_img} src="/items/chicken.jpg" />
                    <h1 className={styles.card_title}>Southern Marinated Fried Chicken</h1>
                    <h1 className={styles.card_tag}>Popular</h1>
                    <h1 className={styles.card_price}>$23</h1>
                </div>
                <div className={styles.card} style={cardStyle1} onClick={() => handleClick(1)}>
                    <img className={styles.card_img} src="/items/turkey.jpg" />
                    <h1 className={styles.card_title}>Turkey Drumstick Osso Bucco</h1>
                    <h1 className={styles.card_tag}>Popular</h1>
                    <h1 className={styles.card_price}>$25</h1>
                </div>
                <div className={styles.card} style={cardStyle2} onClick={() => handleClick(2)}>
                    <img className={styles.card_img} src="/items/snapper.jpg" />
                    <h1 className={styles.card_title}>Whole Red Snapper and Bajan Green Sauce</h1>
                    <h1 className={styles.card_tag}>Healthy</h1>
                    <h1 className={styles.card_price}>$38</h1>
                </div>
                <div className={styles.card} style={cardStyle3} onClick={() => handleClick(3)}>
                    <img className={styles.card_img} src="/items/beet.jpg" />
                    <h1 className={styles.card_title}>Roasted Beet Salad</h1>
                    <h1 className={styles.card_tag}>Healthy</h1>
                    <h1 className={styles.card_price}>$17</h1>
                </div>
                <div className={styles.card} style={cardStyle4} onClick={() => handleClick(4)}>
                    <img className={styles.card_img} src="/items/belly.jpg" />
                    <h1 className={styles.card_title}>Smoked Pork Belly</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$24</h1>
                </div>
                <div className={styles.card} style={cardStyle5} onClick={() => handleClick(5)}>
                    <img className={styles.card_img} src="/items/cobbler.jpg" />
                    <h1 className={styles.card_title}>Vegan Peach Cobbler</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$10</h1>
                </div>
                <div className={styles.card} style={cardStyle6} onClick={() => handleClick(6)}>
                    <img className={styles.card_img} src="/items/lemonade.jpg" />
                    <h1 className={styles.card_title}>Lemonade</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$3</h1>
                </div>
                <div className={styles.card} style={cardStyle7} onClick={() => handleClick(7)}>
                    <img className={styles.card_img} src="/items/tea.jpg" />
                    <h1 className={styles.card_title}>Sweet Tea</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$10</h1>
                </div>
                <button onClick={order}>Order</button>
            </div>
            <div className={styles.cart}>{clicked[0]}</div>
            <div className={styles.bottom_nav}>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}