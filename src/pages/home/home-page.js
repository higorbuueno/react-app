import "./home-page.css";
import { Link } from "react-router-dom";
import { BsChevronCompactRight } from "react-icons/bs";

function Home() {
  return (
    <div className="all">
      <div className="title-card d-flex flex-column align-items-center justify-content-center">
        <div className="text-center">
          <h1>API's</h1>
          <p>Um braço direito dos desenvolvedores.</p>
        </div>
        <div className="mt-5 d-flex align-items-center justify-content-center">
          <Link to="consultador" className="links-principais">
            <div className="me-3 comece-a-usar">
              Consultar API
            </div>
          </Link>
          <Link to="formatador" className="links-principais">
            <div className="me-3 comece-a-usar">
              Formatar JSON
            </div>
          </Link>
          <Link to="como-funciona" className="links-principais">
            <div className="faca-o-tutorial">
              Faça o tutorial <BsChevronCompactRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-5 container" id="colunas">
        <div className="grid">
          <div className="coluna">
            <h3>O que são API's?</h3>
            <p>
              APIs são mecanismos que permitem que dois componentes de software
              se comuniquem usando um conjunto de definições e protocolos. Por
              exemplo, o sistema de software do instituto meteorológico contém
              dados meteorológicos diários. O aplicativo meteorológico em seu
              telefone “fala” com este sistema por meio de APIs e mostra
              atualizações meteorológicas diárias no telefone.
              <br />
              <p className="fst-italic me-3 link-fonte">
                Fonte:{" "}
                <a
                  href="https://aws.amazon.com/pt/what-is/api/"
                  target="_blank"
                  rel="noreferrer"
                >
                  aws.amazon.com
                </a>
                &nbsp; acessado em 19/10/2022 - 14:30
              </p>
            </p>
          </div>
          <div className="coluna">
            <h3> O que significa API? </h3>
            <p>
              API significa Application Programming Interface (Interface de
              Programação de Aplicação). No contexto de APIs, a palavra
              Aplicação refere-se a qualquer software com uma função distinta. A
              interface pode ser pensada como um contrato de serviço entre duas
              aplicações. Esse contrato define como as duas se comunicam usando
              solicitações e respostas. A documentação de suas respectivas APIs
              contém informações sobre como os desenvolvedores devem estruturar
              essas solicitações e respostas.
              <br />
              <p className="fst-italic me-3 link-fonte">
                Fonte:{" "}
                <a
                  href="https://aws.amazon.com/pt/what-is/api/"
                  target="_blank"
                  rel="noreferrer"
                >
                  aws.amazon.com
                </a>
                &nbsp; acessado em 19/10/2022 - 14:30
              </p>
            </p>
          </div>
          <div className="coluna">
            <h3> Como as APIs funcionam? </h3>
            <p>
              A arquitetura da API geralmente é explicada em termos de cliente e
              servidor. A aplicação que envia a solicitação é chamada de cliente
              e a aplicação que envia a resposta é chamada de servidor. Então,
              no exemplo do clima, o banco de dados meteorológico do instituto é
              o servidor e o aplicativo móvel é o cliente.
              <br />
              <p className="fst-italic me-3 link-fonte">
                Fonte:{" "}
                <a
                  href="https://aws.amazon.com/pt/what-is/api/"
                  target="_blank"
                  rel="noreferrer"
                >
                  aws.amazon.com
                </a>
                &nbsp; acessado em 19/10/2022 - 14:30
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
