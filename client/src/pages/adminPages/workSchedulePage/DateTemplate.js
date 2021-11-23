export const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
]
const dateGenerator = () => {
    let dates = []
    for(let i = 1 ;  i<= 31 ; i++){
        dates.push(i+"일")
    }
    return dates
}
export const dates = dateGenerator();

