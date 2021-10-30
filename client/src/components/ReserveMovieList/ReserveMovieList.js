import React from 'react';
import {GradeContainer, ReserveMovieCardContainer, ReserveMovieCardContentContainer} from "./reserveMovieListStyles";


const getViewGradeIconOptions = (viewGradeCode) => {
    const options = {};
    if (viewGradeCode === 0) {
        options.color = '#5BC77E';
        options.text = '전체';
    } else if (viewGradeCode === 12) {
        options.color = '#4DD6FF';
        options.text = '12';
    } else if (viewGradeCode === 15) {
        options.color = '#FFC134';
        options.text = '15';
    } else if (viewGradeCode === 18) {
        options.color = '#ED4C6B';
        options.text = '청불';
    }
    return options;
};

function ReserveMovieCard({name, grade, rating, imgUrl, releasedDate, setStep, setMovieCode, mi, movieCode}) {
    const gradeStyles = getViewGradeIconOptions(grade)
    return (
        <ReserveMovieCardContainer
            selected={mi === movieCode}
            onClick={() => {
                setStep(3)
                setMovieCode(mi)
            }}>
            <img src={imgUrl}/>
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
                    {rating}
                </div>
                <div>
                    {releasedDate}
                </div>
            </ReserveMovieCardContentContainer>
        </ReserveMovieCardContainer>
    );
}

export default ReserveMovieCard;