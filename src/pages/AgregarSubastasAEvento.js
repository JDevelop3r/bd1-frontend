import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

import FormSubasta from "../components/FormSubasta";
import apiService from "../services/api-service";

const AgregarSubastasAEvento = () => {
  const { idEvento } = useParams();
  const alert = useAlert();

  const [evento, setEvento] = useState({});
  const [catalogoMonedas, setCatalogoMonedas] = useState([]);
  const [catalogoPinturas, setCatalogoPinturas] = useState([]);
  const [subastas, setSubastas] = useState([{}]);

  const loadData = async () => {
    const resListaObjeto = await apiService.getListaObjeto(idEvento);
    if (resListaObjeto) setSubastas(resListaObjeto);

    const resEvento = await apiService.getEvento(idEvento);
    setEvento(resEvento);

    const catalogo = await apiService.getCatalogoOrganizadores(
      resEvento.planificadores.map((el) => el.id)
    );
    setCatalogoMonedas(catalogo.monedas);
    setCatalogoPinturas(catalogo.pinturas);
  };

  useEffect(() => loadData(), []);

  const onAgregarSubasta = () => {
    if (subastas.length !== 0) {
      if (faltanCampos()) {
        alert.show("Termine de agregar la subasta para poder agregar otra.", {
          type: "info",
        });
        return;
      }
    }

    setSubastas([...subastas, {}]);
  };

  const setSubasta = (index, subasta) => {
    const newSubastas = subastas;
    const { duracionmin, ...subastaClean } = subasta;
    newSubastas[index] = {
      ...subastaClean,
      duracionmin: duracionmin,
      id_evento: idEvento,
      orden: index,
    };
    setSubastas(newSubastas);
  };

  const onSave = async (e) => {
    e.preventDefault();
    console.log(subastas);
    if (faltanCampos()) {
      alert.show(
        "Termine de registrar la subasta o eliminela antes de guardar.",
        { type: "info" }
      );
      return;
    }
    if (objetoRepetido()) {
      alert.show(
        "tiene un producto repetido, por favor cambielo o elimine uno.",
        { type: "info" }
      );
      return;
    }
    const res = await apiService.agregarSubastasAEvento(subastas, idEvento);
    console.log(res);
  };

  const faltanCampos = () => {
    const ultimaSubasta = subastas[subastas.length - 1];
    return (
      !ultimaSubasta.precio ||
      !ultimaSubasta.porcentajeGananciaMin ||
      (!ultimaSubasta.id_pintura && !ultimaSubasta.nur_moneda) ||
      !ultimaSubasta.duracionmin
    );
  };

  const objetoRepetido = () => {
    subastas.forEach((subastaP) => {
      const filtro = subastas.filter((subasta) =>
        subasta.nur_moneda
          ? subasta.nur_moneda === subastaP.nur_moneda
          : subasta.id_pintura === subastaP.id_pintura
      );
      if (filtro.length > 1) return true;
    });
    return false;
  };

  const onDelete = (index) => {
    if (subastas.length === 0) return;
    const newSubastas = subastas.splice(index, 1);
    setSubastas([...newSubastas]);
  };

  return (
    <main className="container">
      <h2>Agregar lista objetos a evento {evento.id}</h2>
      <form onSubmit={onSave}>
        <div className="col-12">
          <div className="row flex-wrap align-items-center">
            {subastas.map((subasta, index) => {
              console.log(index, subasta);
              return (
                <FormSubasta
                  virtual={evento.tipo === "Virtual"}
                  subasta={subasta}
                  key={index}
                  index={index}
                  catalogoMonedas={catalogoMonedas}
                  catalogoPinturas={catalogoPinturas}
                  setSubasta={setSubasta}
                  onDelete={onDelete}
                />
              );
            })}
            <button
              type="button"
              className="btn btn-secondary col-1"
              onClick={onAgregarSubasta}
              style={{ maxHeight: "50px" }}
            >
              Agregar
            </button>
          </div>
          <button className="btn btn-primary mt-3">Guardar</button>
        </div>
      </form>
    </main>
  );
};

export default AgregarSubastasAEvento;
