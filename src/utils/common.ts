export const getAllYearsFrom1900ToCurrentYearPlusOne = (): number[] => {
  const startYear = 1900;
  const currentYear = new Date().getFullYear();
  const endYear = currentYear + 1; // increase end year by 1 years
  const years = [];

  for (let year = endYear; year >= startYear; year--) {
    years.push(year);
  }

  return years;
};
