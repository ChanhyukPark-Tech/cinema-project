import React, {useState} from 'react';
import Header from "../../components/header/Header";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import axios from "axios";
import {ContactPageStyled} from "../contactPage/ContactPage";
import {Select} from "antd";

const {Option} = Select;

function AddPostPage(props) {

    const [payinfoId, setPayinfoId] = useState('');
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('판매');
    const [sent, setSent] = useState(false);
    const member_id = localStorage.getItem("member_id");
    //handle inputs
    const handleChangeInput = e => {
        const {name, value} = e.target
        switch (name) {
            case "payinfoId":
                setPayinfoId(value);
                break;
            case "content":
                setContent(value);
                break;
            case "title":
                setTitle(value);
                break;
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
            payinfoId,
            content,
            tag,
            member_id,
            today,
            title,
        }

        axios.post('/api/util/addMarketPost', data)
            .then(res => {
                if (res.data.success === 1) {
                    setSent(true)
                    setPayinfoId('');
                    setContent('');
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
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>글작성</h4>
                        </div>
                        <form className="form" onSubmit={formSubmit}>


                            <div className="form-field">
                                <label htmlFor="payinfoId">주문번호</label>
                                <input type="text" name="payinfoId" id="payinfoId" value={payinfoId}
                                       onChange={handleChangeInput}/>
                            </div>


                            <div className="form-field">
                                <label htmlFor="title">제목</label>
                                <input type="text" name="title" id="title" value={title}
                                       onChange={handleChangeInput}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">글 내용작성</label>
                                <textarea name="content" id="content" value={content}
                                          onChange={handleChangeInput}
                                          cols="30" rows="10"/>
                            </div>
                            <Select defaultValue="판매" style={{width: 200}} name="tag" onChange={handleChange}>
                                <Option value="판매">판매</Option>
                                <Option value="구매">구매</Option>
                            </Select>
                            {
                                sent ?
                                    <div className="success-message">
                                        <span>Email Sent Success</span>
                                    </div>
                                    :

                                    <div className="form-field f-button" onClick={formSubmit}>
                                        <PrimaryButton title={'게시글 등록'}/>
                                    </div>
                            }
                        </form>
                    </div>

                </div>
            </ContactPageStyled>
        </>
    );
}

export default AddPostPage;