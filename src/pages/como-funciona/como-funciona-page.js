import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./como-funciona.css";
import JSONPretty from "react-json-pretty";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ComoFunciona() {
  var JSONPrettyMon = require("react-json-pretty/dist/monikai");

  const [kanye, setKanye] = useState('{"null": null}');

  useEffect(() => {
    let url = "https://api.kanye.rest";
    // let url = "https://techy-api.vercel.app/api/json";
    // let url = "https://api.wfstats.cf/?ref=publicapis.dev";

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
        {/* <div className="row">
          <div className="col-11">
            <Form.Label htmlFor="api-url-exemple">API url</Form.Label>
            <Form.Control
              type="text"
              id="api-url-exemple"
              readOnly
              value="https://api.kanye.rest"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Saiba o que é uma API, clicando{" "}
              <a href="https://www.google.com/search?q=O+que+é+uma+API%3F&client=opera-gx&hs=IN5&sxsrf=ALiCzsYfBQwabXljCjJf9wXt5LY3tYPPMw%3A1664726239474&ei=37Q5Y73HHLOI5OUPjfC1sAg&ved=0ahUKEwj9spvB9MH6AhUzBLkGHQ14DYYQ4dUDCA0&uact=5&oq=O+que+é+uma+API%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOgQIIxAnOgQIABBDOggIABCxAxCDAToGCAAQHhAHSgQIQRgASgQIRhgAUNoIWJoiYKsmaAJwAXgAgAFoiAGqB5IBAzguMpgBAKABAcgBCsABAQ&sclient=gws-wiz">
                aqui
              </a>
              .
            </Form.Text>
          </div>
          <div className="col-1 d-flex align-items-center">
            <Button
              variant="primary"
              type="button"
              className="float-end botao-get"
              onClick={onClickGet} // Teria que chamar essa função aqui pra trocar o valor da variável "kanye", daí já refletia sozinho na tela, tlgd?
            >
              GET
            </Button>
          </div>
        </div>

        <div className="result-json mt-4 text-breaktext-break">
          <div className="float-end copy-button" onClick={copiar}>
            <MdContentCopy width={"10px"} />
            <ToastContainer />
          </div>
          <JSONPretty
            id="json-pretty"
            data={kanye}
            theme={JSONPrettyMon}
          ></JSONPretty>
        </div> */}

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

          <Button
            variant="primary"
            type="button"
            className="botao-get"
            onClick={onClickGet}
          >
            GET
          </Button>
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
