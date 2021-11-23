export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getViewGradeIconOptions = (viewGradeCode) => {
  console.log(viewGradeCode)
  const options = {};
  if (viewGradeCode === "전체") {
    options.color = '#5BC77E';
    options.text = '전체';
  } else if (viewGradeCode * 1 === 12) {
    options.color = '#4DD6FF';
    options.text = '12';
  } else if (viewGradeCode * 1 === 15) {
    options.color = '#FFC134';
    options.text = '15';
  } else if (viewGradeCode === "청불") {
    options.color = '#ED4C6B';
    options.text = '청불';
  }
  return options;
};
