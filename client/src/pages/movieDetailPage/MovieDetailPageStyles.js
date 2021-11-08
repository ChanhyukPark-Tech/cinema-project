import styled from "styled-components";

export const MovieDetailEntireContainer = styled.div`
  margin: 3rem 3rem;
  
` 

export const MovieDetailContainer = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid black;
  border-radius: 4px;
  margin-top: 3rem;
`
// 포스터 이미지
export const PosterImageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 4px;
`
// 상영등급, 제목
export const SummaryTitleContainer = styled.div`
  .title { 
      display: flex;
      margin-bottom: 20px;
  }
  .title .text {
    font-size: 26px;
    margin-left: 5px;
  }
`
// 관람객 평점, 예매율 순위, 누적관객수
export const SummaryStatisticsContainer = styled.div`
  .statistics {
      display: flex;
      align-items: center;
      padding-bottom: 17px;
      border-bottom: 1px solid #ddd;
  }
  .statistics li {
      margin-right: 25px;
  }
  .statistics-type {
      font-size: 16px;
  }
  .statistics-value {
      font-size: 18px;
      font-weight: bold;
      font-family: 'Roboto', 'Noto Snas KR';
      margin-left: 10px;
  }
  .statistics-value .icon-sprout {
      font-size: 14px;
      color: #6d8e65;
  }
`
// 장르, 감독, 출연
export const SummaryDetailContainer = styled.div`
  .detail-info {
      margin-top: 20px;
      margin-bottom: 17px;
  }
  .detail-info-type {
      font-size: 13px;
      margin-right: 10px;
  }
  .detail-info-value {
      font-size: 13px;
      color: #2c4b21;
      margin-right: 10px;
      position: relative;
  }
  .detail-info-value.separator {
      padding-left: 10px;
  }
  .detail-info-value.separator::before {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      left: 0;
      width: 1px;
      height: 9px;
      background-color: #ccc;
  }
`
// 영화정보 | 평점 및 관람평 탭
export const TabsContainer = styled.div`
  .tabs {
      margin-top: 32px;
      margin-bottom: 28px;
  }
  .tabs .tab {
      background: transparent;
      width: 50%;
      font-size: 15px;
      font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'snas-serif';
      color: #2c4b21;
      padding: 12px 0;
      outline: none;
      border: none;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
  }
  .tabs .tab.active {
      border-bottom: 2px solid #111;
      color: #000;
  }
`
// 시놉시스
export const SynopsisContainer = styled.div`
.synopsis {
    flex: 0 0 49%;
}
.synopsis .title {
    font-size: 15px;
    margin-bottom: 20px;
}
.synopsis .content {
    height: 130px;
    font-size: 13px;
    line-height: 1.8;
    overflow: scroll;
}
.synopsis .content::-webkit-scrollbar {
    width: 4px;
}
.synopsis .content::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
}
.synopsis .content::-webkit-scrollbar-thumb:hover {
    background: #2c4b21;
}
`
// 선호도
export const PreferenceContainer = styled.div`
.preperence {
    flex: 0 0 49%;
}
.preperence .title {
    font-size: 15px;
    margin-bottom: 20px;
}
.preperence .prefer-group {
    display: flex;
    justify-content: space-between;
}
`
// 성별 선호도
export const GenderPreferenceContainer = styled.div`
.prefer {
    height: 130px;
}
.prefer.gender {
    width: 154px;
}
.prefer .graph {
    height: 100px;
    border-bottom: 1px solid #666;
    position: relative;
}
.prefer .keyword {
    height: 30px;
    text-align: center;
}
.prefer .graph .bar {
    width: 8px;
    background-color: #888;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
}
.prefer .graph .value {
    font-size: 12px;
    color: #888;
    position: absolute;
}
.prefer.gender .keyword span {
    font-size: 12px;
    margin: 0 20px;
}
.prefer.gender .graph .bar.male {
    background-color: #6cceec;
    left: 43px;
}
.prefer.gender .graph .bar.female {
    background-color: #fb5b95;
    left: 104px;
}
.prefer.gender .graph .value.male {
    color: #6cceec;
    left: 32px;
}
.prefer.gender .graph .value.female {
    background: #fb5b95;
    left: 94px;
}
`
// 연령별 선호도
export const AgePreferenceContainer = styled.div`
.prefer {
    height: 130px;
}
.prefer.age {
    width: 280px;
}
.prefer .graph {
    height: 100px;
    border-bottom: 1px solid #666;
    position: relative;
}
.prefer .keyword {
    height: 30px;
    text-align: center;
}
.prefer .graph .bar {
    width: 8px;
    background-color: #888;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  }
  .prefer .graph .value {
    font-size: 12px;
    color: #888;
    position: absolute;
  }
  .prefer.age .keyword span {
    font-size: 12px;
    color: #666;
    margin: 0 13px;
  }
  .prefer.age .graph .bar.gen10 {
    left: 60px;
  }
  .prefer.age .graph .bar.gen20 {
    left: 110px;
  }
  .prefer.age .graph .bar.gen30 {
    left: 160px;
  }
  .prefer.age .graph .bar.gen40 {
    left: 210px;
  }
  .prefer.age .graph .value.gen10 {
    left: 50px;
  }
  .prefer.age .graph .value.gen20 {
    left: 100px;
  }
  .prefer.age .graph .value.gen30 {
    left: 150px;
  }
  .prefer.age .graph .value.gen40 {
    left: 200px;
  }
`
// 트레일러 영상
export const TrailerContainer = styled.div`
.trailer-container {
    margin-top: 40px;
    overflow: hidden;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .header .title {
    font-size: 15px;
    font-weight: 400;
  }
  .header .nav button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 22px;
    color: #888;
    margin-left: 8px;
    cursor: pointer;
  }
  .header .nav button:hover {
    color: #333;
  }
  .trailer {
    display: flex;
    transition: transform 0.3s ease;
  }
  .trailer .item {
    margin-right: 20.5px;
    position: relative;
    cursor: pointer;
  }
  .trailer .item::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 49px;
    height: 54px;
    transform: translate(-50%, calc(-50% - 12px));
    background-image: url('/img/icons/btn_main_visual_play.png');
  }
  .trailer .item:hover {
    opacity: 0.8;
  }
  .media-image {
    object-fit: cover;
  }
  .media-title {
    margin-top: 11px;
    text-align: center;
    font-size: 13px;
  }
`
// 포스터|스틸컷
export const PosterContainer = styled.div`
.poster {
    margin-top: 50px;
  }
  .title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .small-trailer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .small-trailer button {
    display: block;
    flex: 0 0 40px;
    height: 150px;
    background: transparent;
    border: 1px solid #ccc;
    outline: none;
    font-size: 18px;
    color: #999;
    cursor: pointer;
  }
  .small-trailer button:hover {
    color: #333;
  }
  .small-trailer .items-container {
    overflow: hidden;
  }
  .small-trailer .items {
    display: flex;
    /* flex: 0 0 900px; */
    transition: transform 0.3s ease;
  }
  .small-trailer .items .item img {
    object-fit: contain;
  }
  
  .large-trailer {
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .large-trailer button {
    display: block;
    flex: 0 0 107px;
    height: 510px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 36px;
    color: #999;
    cursor: pointer;
  }
  .large-trailer button:hover {
    color: #ddd;
  }
  .large-trailer .items-container {
    overflow: hidden;
  }
  .large-trailer .items {
    display: flex;
    /* flex: 0 0 766px; */
    transition: transform 0.3s ease;
  }
  .large-trailer .items .item img {
    object-fit: contain;
  }  
`
// 감독 및 배우
export const CastingContainer = styled.div`
.casting-container {
    margin-top: 50px;
  }
  .title {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .casting {
    display: flex;
    flex-wrap: wrap;
  }
  .staff {
    display: flex;
    width: 245px;
    margin-bottom: 30px;
  }
  .staff-image {
    border-radius: 50%;
    object-fit: cover;
  }
  .staff-info {
    width: 155px;
    padding: 20px 0 0 30px;
  }
  .staff-info .name {
    font-size: 13px;
  }
  .staff-info .role {
    font-size: 13px;
    color: #666;
  }  
`
// 총 평점
export const ScoreBoxContainer = styled.div`
.score-box {
    text-align: center;
    color: #666;
    margin: 36px 0;
  }
  .score-box .score {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .score-box .score .text {
    font-size: 15px;
    color: #333;
    padding-bottom: 3px;
  }
  .score-box .score .icon-star {
    font-size: 18px;
    color: orange;
    margin: 0 8px;
    padding-bottom: 3px;
  }
  .score-box .score .avg {
    font-size: 35px;
    font-weight: bold;
    color: #000;
    font-family: 'Roboto', 'Noto Sans KR', 'dotum', 'sans-serif';
  }
  .score-box .score .slash {
    font-size: 16px;
    margin: 0 8px;
    padding-top: 3px;
  }
  .score-box .score .max {
    font-size: 21px;
    padding-top: 6px;
  }
  .score-box .info {
    font-size: 13px;
  }  
`
// 리뷰 작성칸 
export const ReviewBoxContainer = styled.div`
.review-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    margin-bottom: 55px;
  }
  .score-box {
    background-color: #f8f8f8;
    flex: 0 0 320px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    text-align: center;
  }
  .score-box .text-score {
    display: block;
    font-size: 13px;
    padding-top: 12px;
  }
  .score-box .text-score .score {
    font-family: 'Roboto', 'Noto Sans KR';
    font-size: 28px;
  }
  .score-box .star-score {
    padding: 5px 0;
  }
  .score-box .star-score .icon-star {
    font-size: 14px;
    margin: 0 3px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .text-box {
    flex: 0 0 540px;
  }
  .text-box textarea {
    display: block;
    width: 100%;
    height: 70px;
    padding: 13px 18px;
    border: none;
    outline: none;
    resize: none;
    font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
  }
  .text-box .text-count-container {
    display: block;
    height: 20px;
    font-size: 10px;
    color: #666;
    text-align: right;
    padding-bottom: 5px;
    padding-right: 10px;
  }
  .text-box .text-count-container .count {
    color: #000;
    font-weight: bold;
  }
  .btn-write {
    display: block;
    flex: 0 0 120px;
    background: #666;
    border: none;
    outline: none;
    color: #fff;
    font-size: 15px;
    font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn-write:hover {
    background: #888;
  }
  .score-box,
  .text-box,
  .btn-write {
    height: 90px;
  }
`
// 리뷰 목록
export const ReviewListContainer = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #ccc;
  }
  .header .total {
    font-size: 15px;
  }
  .header button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    color: #666;
    margin-left: 20px;
    cursor: pointer;
  }
  .header button::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: -2px 8px 0 0;
    background: #ddd;
    border-radius: 50%;
    vertical-align: middle;
    transition: all 0.3s ease;
  }
  .header button.active::before {
    background: #ff7787;
  }
  
  .items .item {
    position: relative;
    width: 980px;
    min-height: 125px;
    padding: 20px 0 15px 68px;
    border-top: 1px solid #eee;
  }
  .items .item.own {
    background-color: #f8f8f8;
  }
  .items .item img {
    position: absolute;
    left: 0;
    top: 20px;
  }
  .items .item .top-info {
    margin-bottom: 12px;
  }
  .items .item .top-info .name {
    font-size: 12px;
    margin-right: 9px;
    padding-right: 11px;
    position: relative;
  }
  .items .item .top-info .name::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 0;
    width: 1px;
    height: 12px;
    background: #ccc;
  }
  .items .item .top-info .score {
    font-size: 15px;
    font-weight: bold;
    font-family: 'Roboto', 'Noto Sans KR', 'dotum', 'sans-serif';
  }
  .items .item .top-info .score .icon-star {
    color: orange;
    font-size: 13px;
    margin-right: 3px;
  }
  .items .item .review-info {
    font-size: 13px;
    margin-bottom: 12px;
  }
  .items .item .bottom-info .date {
    font-size: 11px;
    color: #666;
  }
  .items .item .bottom-info .recommend {
    font-size: 12px;
    font-family: 'Roboto', 'Noto Sans KR', 'dotum', 'sans-serif';
    cursor: pointer;
  }
  .items .item .bottom-info .recommend .icon-thumbs-up {
    font-size: 14px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .items .item .bottom-info .recommend .icon-thumbs-up.liked {
    color: red;
  }
  .items .item .user-control {
    position: absolute;
    top: 20px;
    right: 0;
  }
  .items .item .user-control button {
    display: inline-block;
    background: #fff;
    height: 25px;
    padding: 0 14px;
    font-family: 'Noto Sans KR', 'Roboto', 'dotum', 'sans-serif';
    font-size: 11px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 52px;
    margin-left: 4px;
    cursor: pointer;
  }
`
// 리뷰 펼쳐보기
export const MoreButtonContainer = styled.div`
.btn-more {
    font-size: 12px;
    background: transparent;
    outline: none;
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px 0;
    cursor: pointer;
  }
  .btn-more:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
