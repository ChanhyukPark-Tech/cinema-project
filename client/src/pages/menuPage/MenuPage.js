import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import GridCards from "../menuPage/GridCard";
import {GridCardStyle, BackColor} from "./menuStyles";
import {Row} from "antd";
import EventTitle from "../eventPage/EventTitle";
import {Input} from "antd";
import Fuse from "fuse.js";
import axios from "axios";
const {Search} = Input;

function MenuPage(props) {

    const [data, setData] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('/api/menu/').then(data => {
            setMenu(data.data)
            setData(data.data)
            console.log(data.data)
        })
    },[])
    const handleMenu = (e) => {
        searchData(e.target.value);
    };

    const searchData = (pattern) => {
        if(!pattern) {
            setData(menu);
            return;
        }
        const fuse = new Fuse(menu, {
            keys: ["movieTitle"],
        });
        const result = fuse.search(pattern);

        const matches = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setData(matches);
        }
    }

    return (
        <>
        <BackColor>
            <Header/>
            <EventTitle title={"Snack Menu"} />
            <div
                style={{display: "flex", justifyContent: "center", padding: "2rem"}}
            >
                <Search
                    placeholder="영화를 검색하시면 영화와 관련된 이벤트 메뉴들을 보여드립니다."
                    onsearch={(value) => console.log(value)}
                    onChange={handleMenu}
                    style={{width:200}}
                />
            </div>
            <GridCardStyle>
                <Row gutter={[50,50]}>
                    {data && data.map((menu, index) =>(
                        <React.Fragment key={index}>
                            <GridCards
                                image={menu.imgUrl}
                                title={menu.title}
                                name={menu.name}
                                price={menu.price}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </GridCardStyle>
        </BackColor>
        <Footer/>
        </>
    );
}

export default MenuPage;