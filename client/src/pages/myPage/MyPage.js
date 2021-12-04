import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Title from "../../components/Title/Title";
import {Button, Space, Table, Tag} from "antd";
import EventTitle from "../eventPage/EventTitle";

function MyPage({history}) {
    const current = new Date();
    const params = useParams();
    const memberId = params.id;
    const [userDetail, setUserDetail] = useState([]);
    const [reserveMovies, setReserveMovies] = useState([]);

    const auth = memberId === localStorage.getItem("member_id");
    if (!auth) history.push('/')
    useEffect(() => {
        axios.post('/api/user/userDetail', {memberId: memberId})
            .then(data => {
                setUserDetail(data.data[0])
            })

        axios.post('/api/util/getTicket', {member_id: memberId})
            .then(res => {
                console.log(res.data.filter(data => {
                    return data.movieNm
                }))
                setReserveMovies(res.data.filter(data => {
                    return data.movieNm
                }));
            })
    }, [memberId])


    const deleteUser = (memberId) => {
        axios.post('/api/user/delete', {member_id: memberId})
            .then(data => {
                alert(data.data.msg)
                localStorage.removeItem("name");
                localStorage.removeItem("member_id");
                history.push('/')
            })
    }


    const columns = [
        {
            title: '성함',
            dataIndex: 'name',
            key: 'name',
            render: text => <span key={text}>{text}</span>,
        },
        {
            title: '나이',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '소개팅 이벤트 동의여부',
            dataIndex: 'event',
            key: 'event',
        },
        {
            title: '성별',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag?.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag?.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '회원정보',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/mypage/modify/${memberId}`}>회원정보수정 </Link>
                    <Button onClick={() => deleteUser(memberId)}>회원 탈퇴 </Button>
                </Space>
            ),
        },
    ];
    const deleteHandler = (payinfo_id) => {
        axios.post("/api/reserve/getReserveDelete", {
            payinfo_id: payinfo_id,
        });
        alert("예매 취소되었습니다 영업일 기준 3~4일 이내에 결제하신 수단에 따라 환불됩니다.")
        axios.post('/api/util/getTicket', {member_id: memberId})
            .then(res => {
                setReserveMovies(res.data.filter(data => {
                    return data.movieNm
                }));
            })
    };

    function dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;

        return date.getFullYear() + '-' + month + '-' + day;
    }
    const reserveColumns = [
        {
            title: '결제일',
            dataIndex: 'payDt',
            key: 'payDt',
            render: text => <span key={text}>{text.substring(0, 10)}</span>,
        },
        {
            title: '결제수단',
            dataIndex: 'payMethod',
            key: 'payMethod',
            render: text => <span key={text}>{text}</span>,
        },
        {
            title: '결제번호',
            dataIndex: 'payinfo_id',
            key: 'payinfo_id',
            render: text => <span key={text}>{text}</span>,
        },
        {
            title: '결제금액',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: text => <span key={text}>{text}</span>,
        },
        {
            title: '영화일시',
            dataIndex: 'ymd',
            key: 'ymd',
            render: text => <span key={text}>{text}</span>,
        },
        {
            title: '영화제목',
            dataIndex: 'movieNm',
            key: 'movieNm',
            render: (text, index) => <><span key={text}>{text}</span>

                {
                    new Date(dateFormat(current)) <= new Date(index.ymd) &&
                    <Button
                        style={{marginLeft: 50}}
                        onClick={(e) => {
                            deleteHandler(index.payinfo_id)
                        }}
                        danger
                    >
                        예매취소
                    </Button>}
            </>,
        }

    ];

    const data = [
        {
            key: userDetail.member_id,
            name: userDetail.Nm,
            age: userDetail.age,
            event: userDetail.dateEventAgree,
            tags: [userDetail.gender],
        }
    ]


    return (
        <>
            <Header/>
            <div style={{margin: '0 2vw'}}>

                <Title title={`${userDetail.Nm}`}/>

                <Table columns={columns} dataSource={data}/>
                <Title title={'회원한마디'}/>
                <h3 style={{textAlign: 'center', fontSize: '30px', margin: '40px 0'}}>
                    {userDetail.selfPR}
                </h3>
                <EventTitle title={"예매내역"}/>
                <Table columns={reserveColumns} dataSource={reserveMovies}/>
            </div>

        </>
    );
}

export default MyPage;