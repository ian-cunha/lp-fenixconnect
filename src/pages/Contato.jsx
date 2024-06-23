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
            <main class="div_contato">
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
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                        ></input>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">
                            Dúvidas ou Informações Adicionais
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Contato;
