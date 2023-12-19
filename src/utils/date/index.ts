
import moment from 'moment';

export const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

export const getCurrentDate = () => {
  const currentDate = moment();
  return currentDate;
};

export const getCurrentDateSplitted = (): {
  day: number;
  month: number;
  year: number;
} => {
  getCurrentDate();
  const currentDate = getCurrentDate();
  const day = currentDate.get('D');
  const month = currentDate.get('month');
  const year = currentDate.get('year');

  return { day, month, year };
};

export const getCurrentDateFormatted = (format: string): string => {
  const currentDate = getCurrentDate();

  return currentDate.format(format);
};

export const getCurrentDateFormattedInFull = (): string => {
  const { day, month, year } = getCurrentDateSplitted();

  return `${day} de ${months[month]} de ${year}`;
};

export const getFutureDateIncreasedBy = (
  value: number,
  unit: moment.unitOfTime.DurationConstructor,
) => {
  const currentDate = moment();
  return currentDate.add(value, unit);
};

export const getFutureDateIncreasedBySeconds = (seconds: number) =>
  getFutureDateIncreasedBy(seconds, 'seconds');

export const validateIsPast = (date: Date) => moment(date).isBefore();
