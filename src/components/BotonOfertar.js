import React from "react";
import Card from "./Card";

const BotonOfertar = (props) => {
  const { id } = props;

  const onClickOfertar = () => {
    console.log(id);
  };

  return (
    <Card>
      <div className="row form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Indica tu oferta..."
        />
        <button onClick={onClickOfertar} className="btn btn-secondary">
          OFERTAR
        </button>
      </div>
    </Card>
  );
};

export default BotonOfertar;
