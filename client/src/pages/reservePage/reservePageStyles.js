import styled from "styled-components";

export const ReserveEntireContainer = styled.div`
  margin: 3rem 3rem;
`;
export const ReserveContainer = styled.div`
  width: 100%;

  display: flex;
  border: 2px solid black;
  border-radius: 4px;
  margin-top: 3rem;
`;

export const BranchContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovieListContainer = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;

  & > div:first-of-type {
    // 바로나오는 div 만 css 적용 영화선택만
    background-color: #8d8472;
    display: flex;
    height: 10%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
  }

  & > div:nth-child(2) {
    height: 90%;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TimeListContainer = styled.div`
  width: 100%;
  height: 100%;

  & > div:first-of-type {
    // 바로나오는 div 만 css 적용 영화선택만
    background-color: #8d8472;
    display: flex;
    height: 10%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
  }

  & > div:nth-child(2) {
    height: 90%;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LocalContainer = styled.div`
  width: 100%;
  height: 100%;
  span {
    font-size: 0.8rem;
  }
`;

export const BranchListContainer = styled.div`
  border: 3px solid #8d8472;

  height: 100%;
  width: 100%;
`;

export const BranchTitleContainer = styled.div`
  width: 100%;
  display: flex;
  height: 10%;
  background-color: #8d8472;
  font-size: 1.3rem;

  div {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export const LocalName = styled.div`
  background-color: ${(props) => (props.active ? "#6d8e65" : "")};
  transition: 0.5s ease-in-out;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BranchName = styled.div`
  background-color: ${(props) => (props.active ? "#6d8e65" : "")};
  transition: 0.5s ease-in-out;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeContentContainer = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    border: solid 3px green;
    padding: 3px;
    border-radius: 50%;
    font-weight: bold;
    margin-bottom: 3px;
  }
  .ant-btn{
    width: 200px;
    height: 60px;
    a{
      font-size: 25px;
      font-weight: bold;
    }
    
    
  }

  .line{
  z-index: 30;
    color: black;
    background-color: black;
    height: 30px;
  }
`;



export const BorderLineContainer = styled.div`
  margin-top: 10px;
  width: 45%;
  height: 1px;
  background-color: rgba(20, 84, 7, 0.5);
`