import React from 'react';
import {useStore} from 'react-redux';

const StatusPanel = ({status}) => {

  const store = useStore();

  const dismiss = () => {
    store.dispatch({
      type: 'CLEAR_STATUS'
    })
  };

  return (status.type === 'error') && (
    <div className="row">
      <div className="col s12">
        <div className="card red darken-1">
          <div className="card-content white-text">
            <h5 className="card-title">Please correct the errors detailed</h5>
            {status.data.map(item => (<p key={item.name}>{item.message}</p>))}
          </div>
          <div className="card-action">
            <a className="black-text" href="#" onClick={dismiss}>Dismiss</a>
          </div>
        </div>
      </div>
    </div>
  ) || null;
};

export default StatusPanel;