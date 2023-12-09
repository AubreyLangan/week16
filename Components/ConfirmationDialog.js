import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel, message }) => (
    <div>
        <p>{message}</p>
        <button type='button' onClick={onConfirm}>
            Yes, Delete
        </button>
        <button type='button' onClick={onCancel}>
            Cancel
        </button>
    </div>
  );


export default ConfirmationDialog;