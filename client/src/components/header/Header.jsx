import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import mark from "../../images/mark.png";

const Header = ({theme}) => {
    const [userName, setUserName] = useState("");
    const [memberId, setMemberId] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("name"));
        setMemberId(localStorage.getItem("member_id"));
    }, []);

    return (
        <header
            className={`${classes.header} ${
                theme === "light" ? `${classes.light}` : ""
            }`}
        >
            <div className="center">
                <div className={classes.upper}>
                    <h1 className={classes.logo}>
                        <Link to="/">CEO cinema</Link>
                    </h1>
                    <ul className={`${classes.menu} ${classes.menu1}`}>
                        <li>
                            <Link to={"/"}>
                <span>
                  <img src={mark} alt={mark}/>
                </span>{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                {userName?.substring(0, 3) === "관리자" ? (
                                    <span>관리자 페이지 입니다</span>
                                ) : (
                                    <span>Creative Enjoy Our Cinema</span>
                                )}{" "}
                            </Link>
                        </li>
                    </ul>
                    <ul className={`${classes.menu} ${classes.menu2}`}>
                        {userName?.substring(0, 3) === "관리자" || userName?.includes("-") ? (
                            <></>
                        ) : (
                            <>
                                <li>
                                    <Link to={"/market"}>새싹마켓</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>문의하기</Link>
                                </li>
                            </>
                        )}
                        {!userName ? (
                            <li>
                                <Link to={"/login"}>로그인</Link>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    to={"/"}
                                    onClick={() => {
                                        localStorage.removeItem("name");
                                        localStorage.removeItem("member_id");
                                        setUserName("");
                                        setMemberId("");
                                    }}
                                >
                                    로그아웃
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <nav className={classes.navigation}>
                    <ul className={classes.links}>
                        {userName?.includes("-") ? <>
                            <li>
                                <Link to={"/staff/schedule"}>근무표</Link>
                            </li>
                            <li>
                                <Link to={"/staff/salary"}>급여</Link>
                            </li>
                            <li>
                                <Link to={"/staff"}>공지사항</Link>
                            </li><li>
                                <Link to={"/staff/contact"}>비상연락망</Link>
                            </li>
                        </> : <> {userName?.substring(0, 3) === "관리자" ? (
                            <>
                                <li>
                                    <Link to={"/admin/sales"}>우리지점매출현황</Link>
                                </li>
                                <li>
                                    <Link to={"/admin/schedule"}>직원근무표</Link>
                                </li>
                                <li>
                                    <Link to={"/admin/facility"}>입점시설관리</Link>
                                </li>
                                <li>
                                    <Link to={"/admin/addMovie"}>영화관리</Link>
                                </li>
                                <li>
                                    <Link to={"/admin/props"}>소품관리</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to={"/movie/reserve"}>영화 예매</Link>
                                </li>
                                <li>
                                    <Link to={"/branch/"}>지점 안내</Link>
                                </li>
                                <li>
                                    <Link to={"/event"}>이벤트</Link>
                                </li>
                            </>
                        )}</>}
                    </ul>
                    <ul className={`${classes.menu} ${classes.menu3}`}>
                        {!userName && (
                            <li>
                                <Link to={"/register"}>
                  <span>
                    <i className="fas fa-user"></i>
                  </span>{" "}
                                    회원가입
                                </Link>
                            </li>
                        )}

                        {!userName ? (
                            <></>
                        ) : userName?.substring(0, 3) === "관리자" ? (

                            <></>
                        ) : (
                            <li>
                                {!userName?.includes("-") && <Link to={`/mypage/${memberId}`}>
                  <span>
                    <i className="fas fa-bookmark"></i>
                  </span>{" "}
                                    {userName} 님 페이지로 가기
                                </Link>}
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
