import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import JSONPretty from "react-json-pretty";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./consultador-page.css"
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'react-bootstrap/Spinner';

function Consultador() {
    var JSONPrettyMon = require("react-json-pretty/dist/monikai");

    const [url, setUrl] = useState('https://api.wfstats.cf/?ref=publicapis.dev');
    const [resultJson, setResultJson] = useState('{"null": null}');
    const [statusButton, setStatusButton] = useState('primary');

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setResultJson(JSON.stringify(json));
                setStatusButton("success");
            })
            .catch(() => {
                toast.error("Erro ao consultar de exemplo.");
                setResultJson("");
                setStatusButton("danger");
            }).finally(() => {
                setLoading(false);
                setTimeout(() => {
                    setStatusButton("primary");
                }, 1000);
            });
    }, []);

    const [isLoading, setLoading] = useState(false);

    // Função de copiar!
    const copiar = () => {
        navigator.clipboard.writeText(resultJson);
        toast.success("Copiado!", {
            autoClose: 1500,
            progress: 0,
        });
    };
    const onClickGet = () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setResultJson(JSON.stringify(json));
                setStatusButton("success");
            })
            .catch(() => {
                setResultJson("");
                setStatusButton("danger");
            }).finally(() => {
                setLoading(false);
                setTimeout(() => {
                    setStatusButton("primary");
                }, 1000);
            });
    };

    return (
        <div>
            <ToastContainer />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-11">
                        <Form.Label htmlFor="api-url-exemple">API url</Form.Label>
                        <Form.Control
                            type="text"
                            id="api-url-exemple"
                            placeholder={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Saiba o que é uma API, clicando{" "}
                            <a href="https://www.google.com/search?q=O+que+é+uma+API%3F&client=opera-gx&hs=IN5&sxsrf=ALiCzsYfBQwabXljCjJf9wXt5LY3tYPPMw%3A1664726239474&ei=37Q5Y73HHLOI5OUPjfC1sAg&ved=0ahUKEwj9spvB9MH6AhUzBLkGHQ14DYYQ4dUDCA0&uact=5&oq=O+que+é+uma+API%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOgQIIxAnOgQIABBDOggIABCxAxCDAToGCAAQHhAHSgQIQRgASgQIRhgAUNoIWJoiYKsmaAJwAXgAgAFoiAGqB5IBAzguMpgBAKABAcgBCsABAQ&sclient=gws-wiz">
                                aqui
                            </a>
                            .
                        </Form.Text>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-end mt-2">
                        <Button
                            variant={statusButton}
                            type="button"
                            className="float-end botao-get"
                            disabled={isLoading}
                            onClick={onClickGet}>
                            <label><Spinner animation="grow" variant="light" size="sm" hidden={!isLoading} /> GET</label>
                        </Button>
                    </div>
                </div>
                <div className="resultado-json-consultador mt-4 text-break">
                    <div className="float-end copy-button" onClick={copiar}>
                        <MdContentCopy width={"10px"} />
                    </div>
                    <JSONPretty
                        id="json-pretty"
                        data={resultJson}
                        theme={JSONPrettyMon}
                    ></JSONPretty>
                </div>
            </div>
        </div>
    )
}

export default Consultador;