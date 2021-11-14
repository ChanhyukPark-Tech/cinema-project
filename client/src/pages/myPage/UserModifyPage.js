import React, {useState, useEffect} from 'react';
import Title from "../../components/Title/Title";
import Header from "../../components/header/Header";
import axios from "axios";
import {SigninBlock, SigninFormBlock} from "../registerPage/registerStyles";
import {useParams} from "react-router-dom";


const RegisterPage = ({error, onSubmit,history}) => {
    const {id} = useParams();

    const [inputs,setInputs] = useState({})
    useEffect(() => {
        axios.post('/api/user/userDetail', {memberId:id})
            .then(data => {
                const detail = data.data[0]
                const details = {
                    id: detail.member_id,
                    name : detail.Nm,
                    email : detail.email,
                    password : '',
                    confirmPassword:'',
                    phoneNm : detail.phoneNm,
                    age:detail.age,
                    gender:detail.sex,
                    dateEvent:detail.dateEventAgree,
                    selfPR:detail.selfPR
                }
                setInputs(details)
            })
    }, [])


    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/user/modify',inputs)
            .then(res=>{
                alert(res.data.msg)
                history.push(`/mypage/${res.data.id}`)
            })
    };

    return (
        <>
            <Header/>
            <Title title={"회원가입"}/>
            <SigninBlock>
                <div className="tabs"></div>
                <SigninFormBlock>
                    <div className="center">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="이름을 입력해주세요"
                                    value={inputs.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="이메일을 입력해주세요"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호를 입력해주세요"
                                    value={inputs.password}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="비밀번호를 다시 한번 입력해주세요"
                                    value={inputs.confirmPassword}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="phoneNm"
                                    placeholder="핸드폰 번호를 입력해주세요"
                                    value={inputs.phoneNm}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="age"
                                    placeholder="나이를 입력해주세요"
                                    value={inputs.age}
                                    onChange={handleChange}
                                />
                                <div>
                                    <select value={inputs.gender} onChange={handleChange} name="gender">
                                        <option value="남성">남성</option>
                                        <option value="여성">여성</option>
                                    </select>
                                    <select value={inputs.dateEvent} onChange={handleChange} name="dateEvent">
                                        <option value="동의">소개팅 이벤트에 동의</option>
                                        <option value="비동의">소개팅 이벤트에 동의하지 않음</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    name="selfPR"
                                    placeholder="자기소개를 입력해주세요"
                                    value={inputs.selfPR}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit">수정완료</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </SigninFormBlock>
            </SigninBlock>
        </>
    );
};

export default RegisterPage;