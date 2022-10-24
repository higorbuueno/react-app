import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./como-funciona.css";
import JSONPretty from "react-json-pretty";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsChevronCompactRight } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';

function ComoFunciona() {
  var JSONPrettyMon = require("react-json-pretty/dist/monikai");

  const [kanye, setKanye] = useState('{"null": null}');

  useEffect(() => {
    let url = "https://api.kanye.rest";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setKanye(JSON.stringify(json));
      })
      .catch(() => {
        toast.error("Erro ao consultar api!");
      });
  }, []);

  // Função de copiar!
  const copiar = () => {
    navigator.clipboard.writeText(kanye);
    toast.success("Copiado!", {
      autoClose: 1500,
      progress: 0,
    });
  };
  const onClickGet = () => {
    let url = "https://api.kanye.rest";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setKanye(JSON.stringify(json));
      })
      .catch(() => {
        toast.error("Erro ao consultar api!");
      });
  };

  return (
    <div className="all">
      <ToastContainer />
      <div className="container mt-4">
        <h4> Como utilizar o consultador de API?</h4>
        <p>
          Para começarmos, tenha em mente que este site só faz requisições GET.
        </p>
        <p className="mb-4">
          Para começarmos, precisamos ter o link de alguma API em mãos. Para
          fins didáticos, escolhemos uma API que retorna frases curtas. O link
          da api que vamos utilizar para exemplificar será{" "}
          <a href="https://api.kanye.rest" target="_blank" rel="noreferrer">
            https://api.kanye.rest
          </a>
          .
        </p>
        <p>
          <b>1º Passo</b> - No campo "API url" digite o link da API:
        </p>

        <div>
          <Form.Label htmlFor="api-url-exemple">API url</Form.Label>
          <Form.Control
            type="text"
            id="api-url-exemple"
            readOnly
            value="https://api.kanye.rest"
          />
        </div>

        <div className="mt-5">
          <p>
            {" "}
            <b>2º Passo</b> - Clique no botão 'GET' para fazer uma requisição
            http do tipo get na API informada anteriormente.
          </p>
          <div className="loading-examples">
            Requisição de sucesso: &nbsp;
            <div className="exemple-buttons">
              <Button
                variant="primary"
                type="button"
                className="botao-get"
                onClick={onClickGet}
              >
                GET
              </Button>
              &nbsp;<BsChevronCompactRight />&nbsp;
              <Button
                variant="primary"
                type="button"
                disabled={true}
                className="botao-get"
                onClick={onClickGet}
              >
                <label><Spinner animation="grow" variant="light" size="sm" /> GET</label>
              </Button>
              &nbsp;<BsChevronCompactRight />&nbsp;
              <Button
                variant="success"
                type="button"
                className="botao-get"
                onClick={onClickGet}
              >
                GET
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className="loading-examples">
          Requisição com falha: &nbsp;&nbsp;&nbsp;
          <div className="exemple-buttons">
            <Button
              variant="primary"
              type="button"
              className="botao-get"
              onClick={onClickGet}
            >
              GET
            </Button>
            &nbsp;<BsChevronCompactRight />&nbsp;
            <Button
              variant="primary"
              type="button"
              disabled={true}
              className="botao-get"
              onClick={onClickGet}
            >
              <label><Spinner animation="grow" variant="light" size="sm" /> GET</label>
            </Button>
            &nbsp;<BsChevronCompactRight />&nbsp;
            <Button
              variant="danger"
              type="button"
              className="botao-get"
              onClick={onClickGet}
            >
              GET
            </Button>

          </div>
        </div>
        <div className="mt-4">
          O resultado será exibido no campo em destaque:
        </div>
        <div className="result-json mt-1 mb-4 text-break">
          <div className="float-end copy-button" onClick={copiar}>
            <MdContentCopy width={"10px"} />
          </div>
          <JSONPretty
            id="json-pretty"
            data={kanye}
            theme={JSONPrettyMon}
          ></JSONPretty>
        </div>
      </div>
    </div>
  );
}

export default ComoFunciona;
