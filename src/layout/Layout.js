import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>
        <header>
          <span>Fantastic Beasts & how to call them</span>
        </header>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
