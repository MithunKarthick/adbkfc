function calculateADB(tableData, dates) {
  const result = [];
  tableData.forEach((element) => {
    element.MTD = calculateKFC(dates, element).MTD;
    element.QTD = calculateKFC(dates, element).QTD;
    element.YTD = calculateKFC(dates, element).YTD;
    result.push(element);
  });
  return result;
}

function calculateKFC(dates, element) {
  const daysBetweenKeyDate = daysBetween(element.postingDate, dates.keyDate);
  const daysBetweenMonthStart = daysBetween(dates.startOfMonth, dates.keyDate);
  const daysBetweenQuarterStart = daysBetween(dates.startOfQuarter, dates.keyDate);
  const daysBetweenHalfYearStart = daysBetween(dates.startOfHalfYear, dates.keyDate);
  const daysBetweenYearStart = daysBetween(dates.startOfYear, dates.keyDate);

  if (daysBetweenKeyDate < 0) {
    return {
      MTD: "0",
      QTD: "0",
      YTD: "0",
    };
  }
  const MTD = (element.amount * daysBetweenKeyDate) / daysBetweenMonthStart;
  const QTD = (element.amount * daysBetweenKeyDate) / daysBetweenQuarterStart;
  const HYTD = (element.amount * daysBetweenKeyDate) / daysBetweenHalfYearStart;
  const YTD = (element.amount * daysBetweenKeyDate) / daysBetweenYearStart;

  return {
    MTD,
    QTD,
    HYTD,
    YTD,
  };
}

function daysBetween(startDate, endDate) {
  return (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1;
}

export default calculateADB;
