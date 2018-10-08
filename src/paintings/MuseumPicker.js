import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';



const MuseumPicker = ({ filterMuseums }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div className="active item">All Museums</div>
        <div className="item" onClick={() => filterMuseums()}>National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterMuseums: () => dispatch({type: 'FILTER_MUSEUMS', id: 2})
  }
};

export default connect(null, mapDispatchToProps)(MuseumPicker);
