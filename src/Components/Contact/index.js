import React from "react";
import Page from "../Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = ({ offsetTop }) => (
  <Page id="contact" offsetTop={offsetTop}>
    <div className="my-auto">
      <div className="title-section">
        <h2>Contato</h2>
      </div>
      <div className="w-100 mx-auto" style={{ maxWidth: 768 }}>
        <div className="p-2" style={{ width: "100%" }}>
          <form className="d-flex flex-column justify-content-between h-100">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Nome"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Telefone"
              />
            </div>

            <div className="mb-2">
              <textarea
                className="form-control"
                placeholder="Mensagem"
                rows={5}
              />
            </div>

            <div>
              <button type="submit" className="form-control btn btn-default">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div
          className="d-flex flex-column ml-4 border-left pl-4"
          style={{ width: "85%" }}
        >
          <div className="d-flex flex-column justify-content-around h-75">
            <div className="d-flex justify-content-start">
              <div className="px-2">
                <FontAwesomeIcon icon={faPhone} fixedWidth size="2x" />
              </div>
              <div className="px-2 my-auto">+55 51 3030-9090</div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="px-2">
                <FontAwesomeIcon icon={faEnvelope} fixedWidth size="2x" />
              </div>
              <div className="px-2 my-auto">contato@goal.com</div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="px-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth size="2x" />
              </div>
              <div className="px-2 my-auto">Geraldo Oliveira, 212</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);

export default Contact;
