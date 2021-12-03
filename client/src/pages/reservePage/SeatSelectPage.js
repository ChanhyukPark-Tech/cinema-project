import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import {Link, useParams} from "react-router-dom";
import {startInsert} from "./makeSeatTemplate";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
    ScreenBlock,
    SeatsBlock,
    SeatRow,
    Seat,
    StepBlock,
    PersonSeatCount,
    SeatsInfoBlock,
    PersonSeatSummary,
} from "./makeSeatStyle";
import axios from "axios";
import {getViewGradeIconOptions, numberWithCommas} from "../../util";
import ViewGradeIcon from "../../components/ViewGradeIcon/ViewGradeIcon";
import CountUpDown from "./CountUpDown";
import {LoadingOutlined} from "@ant-design/icons";

function SeatSelectPage() {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    const [curMovie, setCurMovie] = useState([]);
    const [activeSeats, setActiveSeats] = useState([]);
    const [dateInfo, setDateInfo] = useState([]);
    const [wantDate, setWantDate] = useState(false);
    const [gender, setGender] = useState(1);
    const [userDetail, setUserDetail] = useState([]);
    const [curSeatNumber, setCurSeatNumber] = useState("");
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(false)

    useEffect(() => {
        startInsert(setSeats);
        axios
            .post("/api/reserve/getCurMovie", {schedule_id: params.id})
            .then((data) => {
                setCurMovie(data.data[0]);
            });

        axios
            .post("/api/user/userDetail", {
                memberId: localStorage.getItem("member_id"),
            })
            .then((data) => {
                setUserDetail(data.data[0])
                if (data.data[0]?.gender === "여성") setGender(1);
                else {
                    setGender(2);
                }
            });
    }, [params.id]);

    useEffect(() => {
        axios
            .post("/api/reserve/getSeats", {schedule_id: params.id})
            .then((data) => {
                setDateInfo(data.data);
            });
    }, [params.id]);


    useEffect(() => {
        if (wantDate) {

            for (let i = 0; i < seats.length; i++) {
                for (let j = 0; j < dateInfo.length; j++) {
                    if (seats[i].SeatNo === dateInfo[j].seatNm) {
                        if (dateInfo[j].eventGender === "1")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        if (dateInfo[j].eventGender === "2")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        if (dateInfo[j].eventGender === "3")
                            setSeats([...seats, (seats[i].SeatStatusCode = 30)]);
                        if (dateInfo[j].eventGender === "4")
                            setSeats([...seats, (seats[i].SeatStatusCode = 40)]);
                        setSeats([...seats, (seats[i].selfPR = dateInfo[j].selfPR)])
                        setSeats([...seats, (seats[i].dateUrl = dateInfo[j].dateUrl)])

                    }
                }
            }
            setGender(gender + 2);
        } else {
            for (let i = 0; i < seats.length; i++) {
                for (let j = 0; j < dateInfo.length; j++) {
                    if (seats[i].SeatNo === dateInfo[j].seatNm) {
                        if (dateInfo[j].eventGender === "1")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        if (dateInfo[j].eventGender === "2")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        if (dateInfo[j].eventGender === "3")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        if (dateInfo[j].eventGender === "4")
                            setSeats([...seats, (seats[i].SeatStatusCode = 10)]);
                        setSeats([...seats, (seats[i].selfPR = "")])
                        setSeats([...seats, (seats[i].dateUrl = "")])
                    }
                }
            }
            if (gender > 2) setGender(gender - 2);
        }
    }, [wantDate, curMovie, dateInfo]);

    const [customerCount, setCustomerCount] = useState({
        adult: 0,
        youth: 0,
        kids: 0,
        disabled: 0,
    });
    const xScaleRatio = 18;
    const yScaleRatio = 22;
    const seatsBlockWidth = 620;
    const viewGradeIconOptions = getViewGradeIconOptions(curMovie.watchGradeName);
    const handleCustomerCountUpClick = (key) => {
        const nextCount = customerCount[key] + 1;
        if (nextCount < 0 || nextCount > 8) return;
        setCustomerCount({
            ...customerCount,
            [key]: nextCount,
        });
        setActiveSeats([]);
    };
    const handleCustomerCountDownClick = (key) => {
        const nextCount = customerCount[key] - 1;
        if (nextCount < 0 || nextCount > 8) return;
        setCustomerCount({
            ...customerCount,
            [key]: nextCount,
        });
        setActiveSeats([]);
    };

    const handleSeatClick = (seatNo, status) => {
        const totalPersonCount =
            customerCount.adult +
            customerCount.youth +
            customerCount.kids +
            customerCount.disabled;
        if (totalPersonCount === 0) {
            alert("인원을 선택하세요.");
            return;
        }
        if (status !== 0) return;
        setActiveSeats(
            activeSeats.includes(seatNo)
                ? activeSeats.filter((activeSeat) => activeSeat !== seatNo)
                : activeSeats.length < totalPersonCount
                    ? [...activeSeats, seatNo]
                    : activeSeats
        );
        console.log(price);
    };

    const customerDivision = [
        {
            CustomerDivisionCode: 10,
            CustomerDivisionNameKR: "성인",
            CustomerDivisionNameUS: "Adult",
        },
        {
            CustomerDivisionCode: 20,
            CustomerDivisionNameKR: "청소년",
            CustomerDivisionNameUS: "Youth",
        },

        {
            CustomerDivisionCode: 12,
            CustomerDivisionNameKR: "어린이",
            CustomerDivisionNameUS: "kids",
        },

        {
            CustomerDivisionCode: 11,
            CustomerDivisionNameKR: "장애인",
            CustomerDivisionNameUS: "Disabled",
        },
    ];

    const fees = [
        {
            CustomerDivisionCode: 10,
            MovieFee: 13000,
            SeatBlockCode: 1,
            ServiceFee: 0,
            TicketCode: 10,
        },
        {
            CustomerDivisionCode: 11,
            MovieFee: 10000,
            SeatBlockCode: 1,
            ServiceFee: 0,
            TicketCode: 11,
        },
        {
            CustomerDivisionCode: 12,
            MovieFee: 5000,
            SeatBlockCode: 1,
            ServiceFee: 0,
            TicketCode: 12,
        },
        {
            CustomerDivisionCode: 20,
            MovieFee: 5000,
            SeatBlockCode: 1,
            ServiceFee: 0,
            TicketCode: 20,
        },
    ];
    const price = numberWithCommas(
        fees.reduce((acc, item) => {
            const key = customerDivision
                .find(
                    (division) =>
                        division.CustomerDivisionCode === item.CustomerDivisionCode
                )
                .CustomerDivisionNameUS.toLowerCase();
            return acc + customerCount[key] * item.MovieFee;
        }, 0)
    );
    const handleUpload = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]
            if (!file) return alert("File not exist.")

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            console.log(formData)

            const res = await axios.post('/api/upload/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            setLoading(true)
            await axios.post('/api/upload/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div>
            <Header/>
            <StepBlock>
                <SectionTitle title={"인원/좌석 선택"}/>
                <PersonSeatCount>
                    <div className="movie-info">
                        <img src={curMovie.PosterURL} alt="poster"/>
                        <div className="text-info">
                            <div className="title">
                                <ViewGradeIcon
                                    size={22}
                                    color={viewGradeIconOptions.color}
                                    text={viewGradeIconOptions.text}
                                />
                                <span>{curMovie.movieNm}</span>
                            </div>
                            <div className="detail-info">
                                <div className="time">
                                    {`${curMovie.ymd} | ${curMovie.startDt}~${curMovie.endDt}`}
                                </div>
                                <div className="screen">{`${curMovie.CinemaNameKR} | ${curMovie.theaterNm} `}</div>
                            </div>
                        </div>
                    </div>
                    <div className="person-count-list">
                        {customerDivision.map((division) => (
                            <div
                                key={division.CustomerDivisionCode}
                                className="person-count-item"
                            >
                                <span>{division.CustomerDivisionNameKR}</span>
                                <CountUpDown
                                    count={
                                        customerCount[division.CustomerDivisionNameUS.toLowerCase()]
                                    }
                                    onUpClick={() =>
                                        handleCustomerCountUpClick(
                                            division.CustomerDivisionNameUS.toLowerCase()
                                        )
                                    }
                                    onDownClick={() =>
                                        handleCustomerCountDownClick(
                                            division.CustomerDivisionNameUS.toLowerCase()
                                        )
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </PersonSeatCount>
                <ScreenBlock>
                    <div className="screen">SCREEN</div>
                    {userDetail?.dateEventAgree === "동의" && <div style={{display: "flex", alignItems: "center"}}>
                        <input
                            id="check1"
                            type="checkbox"
                            onChange={(e) => {
                                setWantDate(!wantDate);
                            }}
                        />
                        <label htmlFor="check1"></label>
                        <span>소개팅 이벤트 신청하기</span>
                        {wantDate &&

                        <div className="upload">
                            <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                            {
                                loading ? <div id="file_img"><LoadingOutlined
                                        /></div>

                                    :
                                    <div id="file_img" style={styleUpload}>
                                        <img src={images ? images.url : ''} alt=""/>
                                        <span onClick={handleDestroy}>X</span>
                                    </div>
                            }

                        </div>
                        }

                    </div>}
                    <SeatsBlock width={seatsBlockWidth}>

                        {seats.length > 0 &&
                        seats.map(
                            (seat) =>
                                seat.SeatXCoordinate && (
                                    <React.Fragment key={seat.SeatNo}>
                                        <SeatRow
                                            x={0}
                                            y={seat.SeatYCoordinate / yScaleRatio - 60}
                                        >
                                            {seat.SeatRow}
                                        </SeatRow>
                                        <Seat
                                            x={seat.SeatXCoordinate / xScaleRatio}
                                            y={seat.SeatYCoordinate / yScaleRatio - 60}
                                            status={seat.SeatStatusCode}
                                            sweetSpot={seat.SweetSpotYN === "Y" ? true : false}
                                            active={activeSeats.includes(seat.SeatNo)}
                                            onClick={() =>
                                                handleSeatClick(seat.SeatNo, seat.SeatStatusCode)
                                            }
                                            onMouseEnter={(e) => {
                                                setCurSeatNumber(seat.SeatNo)
                                            }}

                                            onMouseLeave={(e) => {
                                                setCurSeatNumber("")
                                            }}
                                        >
                                            {seat.SeatColumn}
                                            {
                                                curSeatNumber === seat.SeatNo && seat.selfPR && seat.SeatStatusCode !== 10 &&
                                                <p class="arrow_box">{seat.selfPR}</p>
                                            }
                                        </Seat>
                                        {
                                            wantDate && (curSeatNumber === seat.SeatNo) && (seat.dateUrl !== "") && (seat.SeatStatusCode !== 10) && (seat.SeatStatusCode !== 0) &&
                                            <div className="other-people">
                                                <img src={seat.dateUrl} alt={seat.dateUrl}/>
                                            </div>
                                        }
                                    </React.Fragment>
                                )
                        )}
                    </SeatsBlock>
                </ScreenBlock>

                <SeatsInfoBlock>
                    <div className="seat-info-group">
                        <div className="seat-info">
                            <Seat size="small" status={0}/> <span>선택가능</span>
                        </div>
                        <div className="seat-info">
                            <Seat size="small" status={10}/> <span>예매완료</span>
                        </div>
                    </div>
                    <div className="seat-info-group">
                        {wantDate &&
                        <>
                            <div className="seat-info">
                                <Seat size="small" status={30}/> <span>소개팅(여)</span>
                            </div>
                            <div className="seat-info">
                                <Seat size="small" status={40}/> <span>소개팅(남)</span>
                            </div>
                        </>}
                        <div className="seat-info">
                            <Seat size="small" sweetSpot/> <span>스위트스팟</span>
                        </div>
                    </div>
                </SeatsInfoBlock>
                <PersonSeatSummary>
                    <div className="seat-result">
                        총 합계 <span className="result">{price}</span>원
                    </div>
                    <button className="btn-pay">
                        <Link
                            to={{
                                pathname: `/movie/reserve/pay`,
                                state: {
                                    schedule_schedule_id: params.id,
                                    RepresentationMovieCode: curMovie.RepresentationMovieCode,
                                    movieName: curMovie.movieNm,
                                    posterUrl: curMovie.PosterURL,
                                    viewGradeCode: curMovie.watchGradeName,
                                    cinemaName: curMovie.CinemaNameKR,
                                    screenName: curMovie.theaterNm,
                                    playDate: curMovie.ymd,
                                    startTime: curMovie.startDt,
                                    endTime: curMovie.endDt,
                                    seatNoList: activeSeats,
                                    price: price.replace(/,/g, ""),
                                    gender: gender,
                                    place_id: curMovie.place_id,
                                    dateUrl: images.url
                                },
                            }}
                        >
                            결제하기
                        </Link>
                    </button>
                </PersonSeatSummary>
            </StepBlock>
        </div>
    );
}

export default SeatSelectPage;
