import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PeopleApi from "../../utils/api";

export default function ModalForm(props) {
  const { nameButton } = props;

  const [show, setShow] = useState(false);

  // form data
  const { register, handleSubmit, reset } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function createNewPeople(event) {
    const data = {
      name: event.name,
      age: event.age,
      address: {
        road: event.road,
        number: event.number,
        neighborhood: event.neighborhood,
        cep: event.cep,
      },
    };

    await PeopleApi.post(data)
      .then(() => {
        reset();
        alert("cadastrado com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        alert("Ops!, algo deu errado não foi possivel cadastrar essa pessoa.");
        console.log(error);
      });
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {nameButton}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(createNewPeople)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                placeholder="Idade"
                {...register("age")}
              />
            </Form.Group>
            <h5>Endereço</h5>
            <hr />
            <Form.Group className="mb-3" controlId="rua">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rua"
                {...register("road")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numero"
                {...register("number")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>Cep</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cep"
                {...register("cep")}
              />
            </Form.Group>
            <Button type="submit" variant="dark">
              Criar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
