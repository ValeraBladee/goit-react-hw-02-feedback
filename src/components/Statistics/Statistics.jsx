import StatisticItem from 'components/StatisticItem/StatisticItem';
import css from './Statistics.module.css';
export default function ListStatistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) {
  return (
    <ul className={css.statisticslist}>
      <li className={css.item} key={1}>
        {' '}
        <StatisticItem itemValue={good} itemKey={'Good'} />{' '}
      </li>
      <li className={css.item} key={2}>
        {' '}
        <StatisticItem itemValue={neutral} itemKey={'Neutral'} />{' '}
      </li>
      <li className={css.item} key={3}>
        {' '}
        <StatisticItem itemValue={bad} itemKey={'Bad'} />{' '}
      </li>
      <li className={css.item} key={4}>
        {' '}
        <StatisticItem itemValue={total} itemKey={'Total'} />{' '}
      </li>
      <li className={css.item} key={5}>
        {' '}
        <StatisticItem
          itemValue={positivePercentage}
          itemKey={'Positive feedback'}
        />{' '}
      </li>
    </ul>
  );
}
