import React from 'react';
import {GradeContainer, ReserveMovieCardContainer, ReserveMovieCardContentContainer} from "./reserveMovieListStyles";
import {getViewGradeIconOptions} from "../../util";



function ReserveMovieCard({name, grade, rating, imgUrl, releasedDate, setStep, setMovieCode, mi, movieCode,setSelectedMovie,selectedMovie}) {
    const gradeStyles = getViewGradeIconOptions(grade)
    return (
        <ReserveMovieCardContainer
            selected={selectedMovie === movieCode}
            onClick={() => {
                setStep(3)
                setSelectedMovie(movieCode)
                setMovieCode(mi)
            }}>
            <img src={imgUrl} alt={imgUrl}/>
            <ReserveMovieCardContentContainer>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <GradeContainer color={gradeStyles.color}>
                        {grade}
                    </GradeContainer>
                    <div style={{fontWeight: 'bold'}}>
                        {name}
                    </div>
                </div>
                <div>
                    ⭐️ {rating}
                </div>
                <div>
                    개봉일 👉 {releasedDate.substring(0,10)}
                </div>
            </ReserveMovieCardContentContainer>
        </ReserveMovieCardContainer>
    );
}

export default ReserveMovieCard;