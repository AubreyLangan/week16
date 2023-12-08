import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const DeleteButton = ({ onDelete }) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleDelete = () => {
    onDelete();
    setConfirmationVisible(false);
  };

  const showConfirmation = () => {
    setConfirmationVisible(true);
  };

  const hideConfirmation = () => {
    setConfirmationVisible(false);
  };

  return (
    <div>
      <button onClick={showConfirmation}>Delete</button>

      {isConfirmationVisible && (
        <ConfirmationDialog
          onConfirm={hideConfirmation}
          onCancel={hideConfirmation}
          message={"Are you sure you want to delete?"}
        />
      )}
    </div>
  );
};

export default DeleteButton;