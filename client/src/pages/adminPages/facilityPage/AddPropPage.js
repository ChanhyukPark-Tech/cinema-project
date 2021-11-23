import React, {useState} from 'react';
import Title from "../../../components/Title/Title";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import axios from 'axios';
import {Select} from "antd";
import { ContactPageStyled } from '../../contactPage/ContactPage';

const {Option} = Select;

function AddPropPage(props) {
    const [propsId, setPropsId] = useState('');
    const [title, setTitle] = useState('');
    const [damageDescription, setdamageDescription] = useState('');
    const [tag, setTag] = useState('처리중');
    const [sent, setSent] = useState(false);

    const handleChangeInput = e => {
        const {name, value} = e.target
        switch(name) {
            case "propsId":
                setPropsId(value);
                break;
            case "damageDescripsion":
                setdamageDescription(value);
                break;
            case "title":
                setTitle(value);
            default:
                return;
        }
    }
    const handleChange = (value) => {
        setTag(value);
    }

    const formSubmit = e => {
        e.preventDefault();
        const current = new Date();
        const year = current.getFullYear();
        const month = current.getMonth() + 1;
        const date = current.getDate();

        let today = year + '/' + month + '/' + date
        let data = {
            title,
            today,
            propsId,
            damageDescription,
            tag,
        }

        axios.post('/api/props/addProp', data)
        .then(res => {
            if (res.data.success === 1) {
                setSent(true)
                setPropsId('');
                setdamageDescription('');
                setTitle('');
            }
            setTimeout(() => {
                setSent(false);
            }, 3000)
        }).catch(() => {
        console.log("message not sent")
        })
    }
    return (
        <>
        <Header/>
        <ContactPageStyled>
            <div className={'contact-section'}>
            <Title title={"파손 내용 추가"} />
                <div className="left-content">
                    <div className="contact-title">
                    <h4></h4>    
                </div>
                <form className="form" onSubmit={formSubmit}>
                    <div className="form-field">
                        <label htmlFor="propsId">파손 시설 모델명</label>
                        <input type="text" name="propsId" id="propsId" value={propsId}
                            onChange={handleChangeInput}/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title" value={title}
                            onChange={handleChangeInput}/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="text-area">파손 내용 작성</label>
                        <textarea name="damageDescription" id="damageDescription" value={damageDescription}
                            onChange={handleChangeInput}
                            cols="30" rows="10"/>
                    </div>
                    <Select defaultValue="처리중" style={{width: 200}} name="tag" onChange={handleChange}>
                        <Option value="완료">완료</Option>
                        <Option value="처리중">처리중</Option>
                    </Select>
                    {
                        sent ?
                        <div className="success-message">
                                <span>Email Sent Success</span>
                        </div>
                        :

                        <div className="form-field f-button" onClick={formSubmit}>
                            <PrimaryButton title={'파손 여부 등록'}/>
                        </div>
                    }
                </form>
                </div>
            </div>
        </ContactPageStyled>
        <Footer/>
        </>
    );
}

export default AddPropPage;