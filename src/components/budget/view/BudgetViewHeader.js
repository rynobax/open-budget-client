import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import BudgetAdd from '../add/BudgetAdd';

const buttonStyle = {
  width: '100%',
  margin: 'auto'
};
const divStyle = {
  padding: 12,
  flex: 1
};

const BudgetListHeader = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={divStyle}>
        <RaisedButton
          icon={<FontIcon className="material-icons">create</FontIcon>}
          style={buttonStyle}
        />
      </div>
      <BudgetAdd {...{buttonStyle: buttonStyle, divStyle: divStyle}}/>
    </div>
  );
};

export default BudgetListHeader;