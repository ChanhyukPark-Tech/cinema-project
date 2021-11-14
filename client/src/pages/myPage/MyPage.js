import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Title from "../../components/Title/Title";
import {Button, Space, Table, Tag} from "antd";

function MyPage({history}) {
    const params = useParams();
    const memberId = params.id;
    const [userDetail,setUserDetail] = useState([])
    const auth = memberId === localStorage.getItem("member_id");
    if(!auth) history.push('/')
    useEffect(() => {
        axios.post('/api/user/userDetail', {memberId:memberId})
            .then(data => {
                setUserDetail(data.data[0])
            })
    }, [])




    const deleteUser = (memberId) => {
        axios.post('/api/user/delete',{member_id:memberId})
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
            render: text => <a>{text}</a>,
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

    const data = [
        {
            key : userDetail.member_id,
            name:userDetail.Nm,
            age:userDetail.age,
            event: userDetail.dateEventAgree,
            tags: [userDetail.sex],
        }
    ]


    return (
        <>
            <Header/>
            <Title title={`${userDetail.Nm}`}/>

            <Table columns={columns} dataSource={data} />
            <Title title={'회원한마디'}/>
            <h3 style={{textAlign:'center', fontSize:'30px'}}>
                {userDetail.selfPR}
            </h3>
        </>
    );
}

export default MyPage;