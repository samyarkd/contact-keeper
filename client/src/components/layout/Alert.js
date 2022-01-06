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
            const alertStyle =
              "shadow-red-100 shadow-lg  text-red-600 p-4 border-red-600  border-2 rounded-sm m-3";

            return (
              <div ref={ref} key={alert.id} className={alertStyle}>
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
