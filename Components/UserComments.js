import React from 'react';

const UserComments = ({ comments }) => {
  const comment = ["Delicious! I made this for dinner last night, and my whole family loved it.", "Super easy to follow. The step-by-step instructions were very helpful.", "My friends couldn't believe I made this from scratch. So good!"];

  return (
    <div>
        <h3>User Comments</h3>
        {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
    </div>
  );
};

export default UserComments;