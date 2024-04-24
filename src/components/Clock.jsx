import moment from 'moment';
import { useEffect, useState } from 'react';


// eslint-disable-next-line react/prop-types
const Clock = ({ name, offset, onDelete }) => {
  const [time, setTime] = useState(moment.utc().add(offset, 'hours'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.utc().add(offset, 'hours'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div>
      <h2>{name}: временная зона {offset}</h2>
      <p>{time.format('HH:mm:ss')}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default Clock;