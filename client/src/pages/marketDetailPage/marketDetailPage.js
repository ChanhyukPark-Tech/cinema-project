import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Input, Button} from "antd";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';



function MarketDetailPage({history}) {
    const params = useParams();
    const [post, setPost] = useState([]);
    const [changeId, setChangeId] = useState("");
    const [forPostUrl, setForPostUrl] = useState([]);
    const [memberId, setMemberId] = useState(0);
    const [seats,setSeats] = useState([]);
    useEffect(() => {
        setMemberId(localStorage.getItem("member_id"));
        //console.log(userName);
    }, []);

    useEffect(() => {
        axios
            .post("/api/util/marketPost", {marketPost_id: params.id})
            .then((data) => {
                setPost(data.data[0]);
                setSeats(data.data);
                axios
                    .post("/api/movie/movieDetail", {RepresentationMovieCode: data.data[0].RepresentationMovieCode})
                    .then((data) => {
                        setForPostUrl(data.data[0]);
                    });
            });


    }, [params.id]);



    const handleChange = (e) => {
        setChangeId(e.target.value);
    };

    const changeIdHandler = (e) => {
        axios
            .post("/api/util/updateMarketPost", {
                member_id: changeId,
                payinfo_id: post.payinfo_id,
                ticket_id : post.ticket_id
            })
            .then((res) => {
                alert(res.data);
                history.push('/market')
            });
    };


    return (
        <>
            <Header/>

            {/*<img src={sproutChar} alt={sproutChar}/>*/}
            <Card sx={{maxWidth: 600}} style={{marginTop: 30, marginLeft: "auto", marginRight: "auto"}}>
                <CardHeader
                    // avatar={
                    //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    //     R
                    //   </Avatar>
                    // }

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={forPostUrl.movieNm}
                    subheader={post.ymd}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={forPostUrl?.PosterURL}
                    alt="poster url"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        {/*<FavoriteIcon />*/}
                    </IconButton>
                    <IconButton aria-label="share">
                        {/*<ShareIcon />*/}
                    </IconButton>
                    {/*<Expand*/}
                    {/*    expand={expanded}*/}
                    {/*    onClick={handleExpandClick}*/}
                    {/*    aria-expanded={expanded}*/}
                    {/*    aria-label="show more"*/}
                    {/*>*/}
                    {/*  <ExpandMoreIcon />*/}
                    {/*</Expand>*/}
                </CardActions>
                {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                <CardContent>
                    <Typography paragraph>👤작성자: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.Nm}</Typography>
                    <Typography paragraph>📱연락처: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.phoneNm}</Typography>
                    <Typography paragraph>🕘상영시간: &nbsp;&nbsp;{post.startDt}~{post.endDt} </Typography>
                    <Typography
                        paragraph>🪑좌석: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{seats.map(seat => (
                            seat.seatNm + " | "
                    ))}</Typography>
                    <Typography paragraph>🎬상영지점: &nbsp;&nbsp;{post.CinemaNameKR}점</Typography>
                    <Typography paragraph>🎬상영관:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.place_place_id}관</Typography>
                    <Typography style={{textAlign: "center"}}>
                        ⭐️CEO CINEMA는 본 거래에 대한 책임을 지지 않습니다⭐️
                    </Typography>
                </CardContent>
                {/*</Collapse>*/}
            </Card>

            {memberId * 1 === post.member_id * 1 &&
            <Input.Group compact style={{marginTop: 30, marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                <Input
                    style={{width: "calc(100% - 1300px)"}}

                    placeholder="변경하려는 회원의 아이디를 입력해주세요"
                    onChange={handleChange}
                />
                <Button type="primary" onClick={changeIdHandler}>
                    변경하기
                </Button>
            </Input.Group>
            }
        </>
    );
}


// function MarketDetailPage() {
//   const params = useParams();
//   const [post, setPost] = useState([]);
//   const [memberId, setMemberId] = useState(0);
//   const [changeId, setChangeId] = useState("");
//   const [payinfoId, setPayInfoId] = useState(0);
//   const [curId, setCurId] = useState(0);
//
//   const handleChange = (e) => {
//     setChangeId(e.target.value);
//     console.log(changeId);
//   };
//
//   useEffect(() => {
//     axios
//       .post("/api/util/marketPost", { marketPost_id: params.id })
//       .then((data) => {
//         setPost(data.data[0]);
//         console.log(data.data[0]);
//       });
//     //setCurId(post.member_id);
//   }, [params.id]);
//
//   useEffect(() => {
//     axios
//       .post("/api/util/marketPost", { marketPost_id: params.id })
//       .then((data) => {
//         setPost(data.data[0]);
//         console.log(data.data[0]);
//       });
//   }, [params.id]);
//
//   useEffect(() => {
//     setMemberId(localStorage.getItem("member_id"));
//   }, []);
//
//   const changeIdHandler = (e) => {
//     axios
//       .post("/api/util/updateMarketPost", {
//         member_id: changeId,
//         payinfo_id: post.payinfo_id,
//       })
//       .then((res) => {
//         console.log(res.data);
//         alert(res.data);
//       });
//   };
//
//
//
//   return (
//     <>
//       <BackColor>
//         <Header />
//         <MarketTitleContainer>
//           <h2>{post.title}</h2>
//         </MarketTitleContainer>
//         <MarketContainer>
//           <DetailInfoStyle>
//             <div style={{ width: "80%", margin: "3rem auto" }}>
//               <table>
//                 <tbody>
//                   <tr>
//                     <th>작성자</th>
//                     <td>dasdasdasdas</td>
//                     <th>작성일</th>
//                     <td>{post.date}</td>
//                     <th>연락처</th>
//                     <td>{post.phoneNm}</td>
//                     <th>좌석</th>
//                     <td>{post.seatNm}</td>
//                   </tr>
//                 </tbody>
//                 <tbody>
//                   <tr>
//                     <th>영화제목</th>
//                     <td>{post.movieNm}</td>
//                     <th>상영일자</th>
//                     <td>
//                       "{post.ymd}" {post.startDt}~{post.endDt}
//                     </td>
//                     <th>상영지점</th>
//                     <td>
//                       {post.theater_theater_id}점
//                     </td>
//                     <th>상영관</th>
//                     <td>
//                       {post.place_place_id}관
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <OneContentContainer>
//               <h3>내용</h3>
//               <p>{post.content}</p>
//             </OneContentContainer>
//
//             <Input.Group compact>
//               <Input
//                 style={{ width: "calc(100% - 800px)" }}
//                 placeholder="변경하려는 회원의 아이디를 입력해주세요"
//                 onChange={handleChange}
//               />
//               <Button type="primary" onClick={changeIdHandler}>
//                 변경하기
//               </Button>
//             </Input.Group>
//           </DetailInfoStyle>
//         </MarketContainer>
//       </BackColor>
//       <Footer />
//     </>
//   );
// }

export default MarketDetailPage;
