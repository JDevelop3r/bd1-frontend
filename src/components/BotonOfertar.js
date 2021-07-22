import React, { useState } from "react";
import Card from "./Card";

const BotonOfertar = (props) => {
  const { id } = props;
  const [oferta, setOferta] = useState();

  const onClickOfertar = () => {
    if (oferta) props.enviarOferta(oferta);
  };

  return (
    <Card>
      <div className="row form-group">
        <input
          type="number"
          min="0"
          value={oferta}
          onChange={(e) => {
            setOferta(e.target.value);
          }}
          className="form-control"
          placeholder="Indica tu oferta..."
        />
        <button
          onClick={onClickOfertar}
          disabled={props.pujo}
          className="btn btn-secondary"
        >
          OFERTAR
        </button>
      </div>
    </Card>
  );
};

export default BotonOfertar;
