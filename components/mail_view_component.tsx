import styled from 'styled-components';
import theme from '../helper/theme';

type ViewProps = {
  data: [];
};

const View = (props: ViewProps) => {
  const { data } = props;

  if (!data.length) {
    return (<div />)
  }

  return (
    <div>
      {data.map((item, index) => (
        // 条件に基づいて要素をレンダリング
        <div className="mail">
          <p>{ item.name }</p>
          {item.auto_send ? (
            <p className="mail-time">{ item.auto_send }</p>
          ) : (
            <p className="mail-time">{ item.created_at_format }</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default View;
