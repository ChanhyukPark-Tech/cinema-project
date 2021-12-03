import React, {useEffect, useState} from 'react';
import Header from "../../../components/header/Header";
import axios from "axios";
import {Button, Table} from "antd";
import Footer from "../../../components/Footer/Footer";

function PropsPage(props) {
    const [ourProps, setOurProps] = useState([])
    const [damage, setDamage] = useState("");
    const [modelNm, setModelNm] = useState("")

    useEffect(() => {
        axios.post('/api/props/', {place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                setOurProps(res.data)
            })
    }, [])

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "damage":
                setDamage(value);
                break;
            case "modelNm":
                setModelNm(value);
                break;
            default:
                return;
        }
    };

    const columns = [

        {
            title: "품목",
            dataIndex: "propsTypeNm",
            key: "propsTypeNm",
        },


        {
            title: "모델명",
            key: "modelNm",
            dataIndex: "modelNm"
        },
        {
            title: "수량",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "단가",
            dataIndex: "price",
            key: "price",
        },

        {
            title: "파손여부",
            dataIndex: "damage",
            key: "damage",
        },


    ]
    const addDamageHandler = () => {
        axios.post('/api/props/updateProp', {
            place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length),
            damage: damage,
            modelNm: modelNm
        }).then(res => {
            console.log(res.data)
        })
        alert("파손등록 완료되었습니다!")
        axios.post('/api/props/', {place_id: localStorage.getItem("name").substring(3, localStorage.getItem("name").length)})
            .then(res => {
                setOurProps(res.data)
            })
    }

    return (
        <>
            <Header/>
            <div style={{padding: '30px'}}>
                <Table columns={columns} dataSource={ourProps}/>

            </div>
            <div style={{display: 'flex'}}>

                <div className="form-field" style={{marginRight:'30px',marginLeft:'30px'}}>
                    <label htmlFor="modelNm" style={{marginRight:'15px'}}>모델명을 입력하세요</label>
                    <input
                        type="text"
                        name="modelNm"
                        id="modelNm"
                        value={modelNm}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="form-field" style={{marginRight:'30px'}}>
                    <label htmlFor="damage" style={{marginRight:'15px'}}>파손 내용을 입력하세요</label>
                    <input
                        type="text"
                        name="damage"
                        id="damage"
                        value={damage}
                        onChange={handleChangeInput}
                    />
                </div>
                <Button onClick={addDamageHandler}>파손추가</Button>
            </div>
            <Footer/>
        </>
    );
}

export default PropsPage;