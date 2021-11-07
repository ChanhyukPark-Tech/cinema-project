import styled from "styled-components";


export const BranchSelectionContainer = styled.div`
  margin-top: 5vh;
  width: 100%;
`

export const DivisionContainer = styled.div`
  padding: 5px 0;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  font-size: 24px;
  color: #145407;
  border: 3px solid #6d8e65;
`

export const BranchContainer = styled.div`
  padding: 5px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  font-size: 16px;
  color: black;
  border-bottom: 3px solid #6d8e65;
`

export const BranchContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2vh;
  }
`