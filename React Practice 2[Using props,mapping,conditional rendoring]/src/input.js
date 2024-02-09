import React from 'react';
import Profile from './Profile';
import users from './users';

const InputField = () => {
  return (
    <div>
      {users.map((user, index) => (
        <Profile 
          key={index} 
          name={user.name} 
          img={user.img}
          online={user.online}
          role={user.role}
          skills={user.skills}
        />
      ))}
    </div>
  );
};

export default InputField;
