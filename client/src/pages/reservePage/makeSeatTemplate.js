export function startInsert(setSeats) {
  const seatsTemplate = [];
  let SeatColumn;
  let SeatNo;
  let initialX = 910;
  let initialY = 2082;
  let SeatStatus = 0;
  let SweetSpotYN = "N";
  for (let i = 1; i < 11; i++) {
    SeatColumn = i;

    let SeatXCoordinate = initialX + (i - 1) * 900;
    for (let j = 65; j < 75; j++) {
      let SeatYCoordinate = initialY + (j - 65) * 930;

      let tempString = String.fromCharCode(j);
      SeatNo = `${tempString}${i}`;
      if (j > 72) {
        SweetSpotYN = "Y";
      } else SweetSpotYN = "N";

      seatsTemplate.push({
        SeatColumn: i,
        SeatNo: SeatNo,
        SeatRow: tempString,
        SeatStatusCode: SeatStatus,
        SeatXCoordinate,
        SeatYCoordinate,
        SweetSpotYN: SweetSpotYN,
      });
    }
  }

  setSeats(seatsTemplate);
}
