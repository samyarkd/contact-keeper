import React, { forwardRef, useContext } from "react";
import FlipMove from "react-flip-move";
import AlertContext from "../context/Alert/AlertContext";

const Alerts = forwardRef((ref) => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    alerts.length > 0 && (
      <FlipMove>
        <div className='p-2 m-3'></div>
        {alerts.map((alert) => {
          if (alert !== false) {
            return (
              <div
                ref={ref}
                key={alert.id}
                className={`shadow-${alert.type}-100 shadow-lg  text-${alert.type}-600 p-4 border-${alert.type}-600  border-2 rounded-sm m-3`}
              >
                <i className='fas fa-info-circle mr-3' />
                {alert.msg}
              </div>
            );
          }
        })}
      </FlipMove>
    )
  );
});

export default Alerts;
