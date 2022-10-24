import "./formatador-page.css";
import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import JSONPretty from "react-json-pretty";
import { ToastContainer, toast } from "react-toastify";
import { MdContentCopy } from "react-icons/md";
import Button from "react-bootstrap/Button";

function Formatador() {
  var JSONPrettyMon = require("react-json-pretty/dist/monikai");
  const [jsonNaoFormatado, setJsonNaoFormatado] = useState("");
  const [jsonFormatado, setJsonFormatado] = useState("");

  // Função de copiar!
  const copiar = () => {
    navigator.clipboard.writeText(jsonNaoFormatado);
    toast.success("Copiado!", {
      autoClose: 1500
    });
  };

  const validarEFormatarJson = () => {
    try {
      JSON.parse(jsonNaoFormatado);
      setJsonFormatado(jsonNaoFormatado);
    } catch (e) {
      setJsonFormatado("");
      toast.error("Json não é válido", {
        autoClose: 2000
      });
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <ToastContainer />
      <div className="row">
        <div className="col-12">
          Cole seu JSON não formatado
          <textarea
            id="json-nao-formatado"
            onChange={(e) => setJsonNaoFormatado(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <Button onClick={validarEFormatarJson} variant="success">
              Formatar <BsChevronCompactDown />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12" id="caixa-resultado">
            Resultado
            <div className="json-resultado mt-1 mb-4 text-break text-start text-wrap">
              <div
                className="float-end copy-button text-break"
                onClick={copiar}
              >
                <MdContentCopy width={"10px"} />
              </div>
              <JSONPretty
                id="json-pretty"
                data={jsonFormatado}
                theme={JSONPrettyMon}
              ></JSONPretty>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formatador;
