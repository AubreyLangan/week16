import React from 'react'

const StepList = ({ steps }) => {
  return (
    <ol>
        {steps.map((step, index) => {
            <li key={index}>{step}</li>
        })}
    </ol>
  );
};

export default StepList;