import styles from '../../styles/Menu.module.css'
import { useSpring, animated } from 'react-spring';
import React, {useState} from 'react';
import Link from 'next/link'

let clicked = [false, false, false, false, false, false, false, false];
let deliveryClick = [false, false, false];
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
    const welcome_spring = useSpring({
        to: {
            opacity: 1,
            position: '-15px',
        },
        from: { 
            opacity: 0,
            position: '-5px',
        },
        delay: 100,
    });
    const info_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 500,
    });
    const info1_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 800,
    });
    const info2_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 1100,
    });
    const info3_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 1400,
    });
    const menu_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 1700,
    });
    const menu0_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 1900,
    });
    const menu1_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 2100,
    });
    const menu2_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 2300,
    });
    const menu3_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 2600,
    });
    const menu4_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 2900,
    });
    const menu5_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 3100,
    });
    const menu6_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 3200,
    });
    const menu7_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 3400,
    });

    const [background0, setBackground0] = useState("#fff");
    const [background1, setBackground1] = useState("#fff");
    const [background2, setBackground2] = useState("#fff");
    const [background3, setBackground3] = useState("#fff");
    const [background4, setBackground4] = useState("#fff");
    const [background5, setBackground5] = useState("#fff");
    const [background6, setBackground6] = useState("#fff");
    const [background7, setBackground7] = useState("#fff");

    const [delivery0, setDelivery0] = useState("#fff");
    const [delivery1, setDelivery1] = useState("#fff");
    const [delivery2, setDelivery2] = useState("#fff");

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
    let deliveryStyle0 = {
        backgroundColor: `${delivery0}`,
    }
    let deliveryStyle1 = {
        backgroundColor: `${delivery1}`,
    }
    let deliveryStyle2 = {
        backgroundColor: `${delivery2}`,
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

    const handleDeliveryClick = (param) => {
        for (let i = 0; i < deliveryClick.length; i++) {
            if (deliveryClick[i]) {
                if (i != param) {
                    deliveryClick[i] = false;
                    switch (i) {
                        case 0:
                            setDelivery0('#fff');
                            break;
                        case 1:
                            setDelivery1('#fff');
                            break;
                        default:
                            setDelivery2('#fff');
                            break;
                    }
                }
            }
        }
        switch(param) {
            case 0:
                if (deliveryClick[0]) {
                    setDelivery0('#fff');
                } else {
                    setDelivery0('#c4c4c4')
                }
                break;
            case 1:
                if (deliveryClick[1]) {
                    setDelivery1('#fff');
                } else {
                    setDelivery1('#c4c4c4')
                }
                break;
            default:
                if (deliveryClick[2]) {
                    setDelivery2('#fff');
                } else {
                    setDelivery2('#c4c4c4')
                }
                break;
        }
        deliveryClick[param] = !deliveryClick[param]
    }

    async function order() {
        let orderFood = "";
        let orderPrice = 0;
        let delivery = 0;
        for (let i = 0; i < clicked.length; i++) {
            if (clicked[i]) {
                orderFood += orders[i] + ",";
                orderPrice += prices[i];
            }
        }
        for (let i = 0; i < deliveryClick.length; i++) {
            if (deliveryClick[i]) {
                delivery = i;
            }
        }
        switch (delivery) {
            case 0:
                delivery = "dine-in";
                break;
            case 1:
                delivery = "curbside";
                break;
            default:
                delivery = "delivery";
                break;
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
                "delivery": `${delivery}` 
            }), headers: {
              'Content-Type': 'application/json',
            },
          })
    }

    return (
        <div>
            <animated.div style={welcome_spring} className={styles.header}>
                <h1 className={styles.header_text}>Twisted Soul Cookhouse</h1>
                <img className={styles.header_img} src="/twistedmain.webp" />
                <div className={styles.header_overlay}></div>
            </animated.div>
            <div className={styles.info}>
                <animated.h1 style={info_spring} className={styles.info_add}>1133 Huff Rd NW, Ste D, Atlanta, GA 30318</animated.h1>
                <animated.h1 style={info_spring} className={styles.info_desc}>$$ | Southern | 1.7 mi</animated.h1>
                <animated.h1 style={info_spring} className={styles.info_desc}>Hours: 12 PM - 10 PM</animated.h1>
                <animated.h1 style={info_spring} className={styles.info_time}>Estimated Time</animated.h1>
                <div className={styles.info_grid}>
                    <div style={deliveryStyle0} onClick={() => handleDeliveryClick(0)}>
                        <animated.div style={info1_spring} className={styles.info_items}>
                            <p className={styles.info_items_text}>Dine In</p>
                            <div className={styles.info_bubble}>25 min</div>
                        </animated.div>
                    </div>
                    <div style={deliveryStyle1} onClick={() => handleDeliveryClick(1)}>
                    <animated.div style={info2_spring} className={styles.info_items}>
                        <p className={styles.info_items_text}>Curbside</p>
                        <div className={styles.info_bubble}>35 min</div>
                    </animated.div>
                    </div>
                    <div style={deliveryStyle2} onClick={() => handleDeliveryClick(2)}>
                    <animated.div style={info3_spring} className={styles.info_items}>
                        <p className={styles.info_items_text}>Delivery</p>
                        <div className={styles.info_bubble}>50 min</div>
                    </animated.div>
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <animated.h1 style={menu_spring} className={styles.menu_header}>Menu</animated.h1>
                <div className={styles.card} style={cardStyle0} onClick={() => handleClick(0)}>
                <animated.div style={menu0_spring}>
                    <img className={styles.card_img} src="/items/chicken.jpg" />
                    <h1 className={styles.card_title}>Southern Marinated Fried Chicken</h1>
                    <h1 className={styles.card_tag}>Popular</h1>
                    <h1 className={styles.card_price}>$23</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle1} onClick={() => handleClick(1)}>
                <animated.div style={menu1_spring}>
                    <img className={styles.card_img} src="/items/turkey.jpg" />
                    <h1 className={styles.card_title}>Turkey Drumstick Osso Bucco</h1>
                    <h1 className={styles.card_tag}>Chef's Choice</h1>
                    <h1 className={styles.card_price}>$25</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle2} onClick={() => handleClick(2)}>
                <animated.div style={menu2_spring}>
                    <img className={styles.card_img} src="/items/snapper.jpg" />
                    <h1 className={styles.card_title}>Whole Red Snapper and Bajan Green Sauce</h1>
                    <h1 className={styles.card_tag}>Healthy</h1>
                    <h1 className={styles.card_price}>$38</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle3} onClick={() => handleClick(3)}>
                <animated.div style={menu3_spring}>
                    <img className={styles.card_img} src="/items/beet.jpg" />
                    <h1 className={styles.card_title}>Roasted Beet Salad</h1>
                    <h1 className={styles.card_tag}>Healthy</h1>
                    <h1 className={styles.card_price}>$17</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle4} onClick={() => handleClick(4)}>
                <animated.div style={menu4_spring}>
                    <img className={styles.card_img} src="/items/belly.jpg" />
                    <h1 className={styles.card_title}>Smoked Pork Belly</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$24</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle5} onClick={() => handleClick(5)}>
                <animated.div style={menu5_spring}>
                    <img className={styles.card_img} src="/items/cobbler.jpg" />
                    <h1 className={styles.card_title}>Vegan Peach Cobbler</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$10</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle6} onClick={() => handleClick(6)}>
                <animated.div style={menu6_spring}>
                    <img className={styles.card_img} src="/items/lemonade.jpg" />
                    <h1 className={styles.card_title}>Lemonade</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$3</h1>
                </animated.div></div>
                <div className={styles.card} style={cardStyle7} onClick={() => handleClick(7)}>
                <animated.div style={menu7_spring}>
                    <img className={styles.card_img} src="/items/tea.jpg" />
                    <h1 className={styles.card_title}>Sweet Tea</h1>
                    <h1 className={styles.card_tag}></h1>
                    <h1 className={styles.card_price}>$10</h1>
                </animated.div></div>
                <Link href="/nav/order"><button className={styles.button} onClick={order}>Order</button></Link>
            </div>
            <div className={styles.cart}>{clicked[0]}</div>
            <div className={styles.bottom_nav}>
                <Link href="/nav/deal"><img className={styles.bottom_deals} src="/deals.png" /></Link>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}