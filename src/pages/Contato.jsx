import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import emailjs from '@emailjs/browser';

const Contato = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mocofpo', 'template_h8d2pdd', e.target, '99Go4tBmzniX7Z7e9')
            .then((result) => {
                console.log(result.text);
                alert("Mensagem enviada com sucesso!");
            }, (error) => {
                console.log(error.text);
                alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
            });
    };

    const quotes = [
        { text: "O importante é não parar de questionar. A curiosidade tem sua própria razão de existir.", author: "Albert Einstein" },
        { text: "A única maneira de fazer um grande trabalho é amar o que você faz.", author: "Steve Jobs" },
        { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
        { text: "A vida é como uma câmera. Foco no que é importante, capture o que é bom e desenvolva o que foi aprendido.", author: "Autor Desconhecido" },
        { text: "A simplicidade é a última sofisticação.", author: "Leonardo da Vinci" },
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const changeQuote = () => {
            setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
        };
    
        const intervalId = setInterval(changeQuote, 5000);
    
        return () => clearInterval(intervalId);
    }, []);

    const currentQuote = quotes[currentQuoteIndex];

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
                        <div className="col-md-5">
                            <div className="h-100 p-4 rounded-3 contato">
                                <h2>Contato</h2>
                                <p className="text-justify">
                                    Entre em contato agora mesmo, não exite em entrar em contato conosco. Acredito que nossa equipe tentará ao máximo lhe ajudar ou esclarecer algumas das suas dúvidas.
                                </p>
                                <br />
                                <figure>
                                    <blockquote className="blockquote">
                                        <p className="text-justify">{currentQuote.text}</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Citação de <cite title="Source Title">{currentQuote.author}</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="h-100 p-4 border rounded-3 bg-gray">
                                <h2>Dúvidas?</h2>
                                <p className="text-justify">
                                    Envie sua mensagem sobre qualquer dúvida ou assunto relacionado ao nosso app e responderemos o mais rápido possível.
                                </p>
                                <form className="row g-2" onSubmit={sendEmail}>
                                    <div>
                                        <label htmlFor="inputNome" className="form-label">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputNome"
                                            name="user_name"
                                            placeholder="Digite seu nome completo"
                                            required
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            name="user_email"
                                            placeholder="Digite seu email"
                                            required
                                        ></input>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">
                                            Qual é a sua mensagem?
                                        </label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Digite sua mensagem aqui"
                                            id="exampleFormControlTextarea1"
                                            name="message"
                                            rows="5"
                                            required
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