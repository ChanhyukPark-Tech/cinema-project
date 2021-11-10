import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import Title from "../../components/Title/Title";
import {Space, Table, Tag} from "antd";

function MyPage(props) {
    const params = useParams();
    const memberId = params.id;
    const [userDetail,setUserDetail] = useState([])

    useEffect(() => {
        axios.post('/api/user/userDetail', {memberId:memberId})
            .then(data => {
                setUserDetail(data.data[0])
            })
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'event',
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
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/mypage/modify/${memberId}`}>회원정보수정 </Link>
                    <a>Delete</a>
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