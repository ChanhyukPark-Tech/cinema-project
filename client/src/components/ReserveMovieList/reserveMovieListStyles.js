import styled from "styled-components";


export const ReserveMovieCardContainer = styled.div`
  display: flex;
  border: ${props => props.selected ? '5px solid black' : '1px solid black'};
  img{
    width: 7vh;
    height: 10vh;
    margin-right: 1rem;
    
  }
`

export const ReserveMovieCardContentContainer = styled.div`

`

export const GradeContainer = styled.div`
 background-color: ${props => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.4rem;
  color: white;
`
