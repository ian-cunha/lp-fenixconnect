import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contato = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="container py-4">
                    <div className="pt-5 rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Pergunte, estamos aqui para ajudar.</h1>
                            <p className="fs-5 text-justify">
                                Estamos aqui para garantir que você tenha todas as informações necessárias sobre nosso projeto. Não hesite em nos perguntar sobre nossos serviços, funcionalidades, ou qualquer outra questão que você possa ter. Nossa equipe está pronta para responder suas perguntas e ajudar você a aproveitar ao máximo o que oferecemos. Deixe-nos esclarecer suas dúvidas e mostrar como podemos contribuir para o seu sucesso. Seu entendimento e satisfação são fundamentais para nós!
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-4 rounded-3 contato">
                                <h2>Contato</h2>
                                <p>
                                    Entre em contato agora mesmo, não exite em entrar em contato conosco. Acredito que nossa equipe tentará ao máximo lhe ajudar ou esclarecer algumas das suas dúvidas.
                                </p>
                                <br></br>
                                <figure>
                                    <blockquote class="blockquote">
                                        <p>"O importante é não parar de questionar. A curiosidade tem sua própria razão de existir."</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        Sitação de <cite title="Source Title">Albert Einstein</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="h-100 p-4 bg-body-tertiary border rounded-3">
                                <h2>Dúvidas?</h2>
                                <p>
                                    Envie sua mensagem sobre qualquer dúvida ou assunto
                                    relacionado ao nosso app e responderemos o mais rápido
                                    possível.
                                </p>
                                <form className="row g-2">
                                    <div>
                                        <label for="inputNome" className="form-label">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputNome"
                                            placeholder="Pedro Silva Bernado"
                                        ></input>
                                    </div>
                                    <div>
                                        <label for="inputEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            placeholder="Example@example.com"
                                        ></input>
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">
                                            Qual é a sua mensagem?
                                        </label>
                                        <textarea
                                            class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn-orange">
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Contato;
