import React from 'react';
import { Avatar } from 'antd';

function getColor(username) {
  const colors = [
    '#ffa38a',
    '#a9a7e0',
    '#D686D4',
    '#96CE56',
    '#4A90E2',
    '#62b3d0',
    '#ef7676',
  ];
  const firstChar = username.charCodeAt(0);
  const secondChar = username.charCodeAt(1);
  const thirdChar = username.charCodeAt(2);

  return colors[(firstChar + secondChar + thirdChar) % 7];
}

export const getUsernameAvatar = (username, size = 'large') => {
  return (
    <div>
      <Avatar
        style={{
          backgroundColor: getColor(username),
          verticalAlign: 'middle',
        }}
        size={size}
      >
        {username ? username.charAt(0).toUpperCase() : ''}
      </Avatar>
    </div>
  );
};
