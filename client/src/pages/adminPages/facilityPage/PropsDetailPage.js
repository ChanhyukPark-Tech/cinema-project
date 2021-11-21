import React, {useEffect, useState} from "react";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { BackColor } from "../../eventPage/eventStyles";
import { useParams } from "react-router-dom";
import { PropsDetailStyle, OneContentContainer } from "./PropsDetailPageStyle";
import { FacilityContainer, FacilityTitleContainer } from "./FacilityPageStyles";
import axios from "axios";

function PropsDetailPage() {
    const params = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios 
        .post("/api/") // PropPost 
        .then((data) => {

        });
    },[]);

    return (
        <>
        <BackColor>
            <Header/>
            <FacilityTitleContainer>
                <h2>
                    {post.title}
                </h2>
            </FacilityTitleContainer>
            <FacilityContainer>
                <PropsDetailStyle>
                    <div style={{width:"80%", margin:"3rem auto"}}>
                        <table>
                            <tr>
                            <th>파손 시설 모델명</th> <td>{post.propsId}</td>
                            <th>작성일</th> <td>{post.date}</td>
                            </tr>

                            <tr>
                            <th>시설 유형</th> <td>{post.propsType}</td>
                            <th>시설 위치 지점</th> <td>{post.place}</td>
                            </tr>
                            
                            <tr>
                            <th>단가</th> <td>{post.price}</td>
                            <th>재고</th> <td>{post.amount}</td>
                            </tr>
                        </table>
                </div>
                <OneContentContainer>
                    <h3>파손 상세 사항</h3>
                        <p>{post.damage}</p>
                </OneContentContainer>
                </PropsDetailStyle>
            </FacilityContainer>
        </BackColor>
        <Footer/>
        </>
    )
}

export default PropsDetailPage;
