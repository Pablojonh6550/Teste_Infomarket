import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPencilSquare } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PeopleApi from "../../utils/api";

export default function ModalUpdateForm(props) {
  const { data } = props;
  const [dataPeople, setDataPeople] = useState(data);

  const [show, setShow] = useState(false);
  // form data
  const { register, handleSubmit } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(value, campo) {
    const formData = Object.assign({}, dataPeople, { [campo]: value });

    setDataPeople(formData);
  }

  async function handleUpdatePeople() {
    const peopleId = dataPeople.id;

    const dataUpdate = {
      name: dataPeople.nome,
      age: dataPeople.idade,
      address: {
        road: dataPeople.rua,
        number: dataPeople.numero,
        neighborhood: dataPeople.bairro,
        cep: dataPeople.cep,
      },
    };
    console.log(dataUpdate, dataPeople);
    await PeopleApi.put(peopleId, dataUpdate)
      .then(() => {
        handleClose();
        alert("atualizado com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        alert("Ops!, algo deu errado não foi possivel atualizar essa pessoa.");
        console.log(error);
      });
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsPencilSquare className="icon-color" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleUpdatePeople)}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                {...register("name")}
                value={dataPeople.nome}
                name="nome"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                type="number"
                placeholder="Idade"
                {...register("age")}
                value={dataPeople.idade}
                name="idade"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
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
                value={dataPeople.rua}
                name="rua"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="number"
                placeholder="Numero"
                {...register("number")}
                value={dataPeople.numero}
                name="numero"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
                value={dataPeople.bairro}
                name="bairro"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>Cep</Form.Label>
              <Form.Control
                type="number"
                placeholder="Cep"
                {...register("cep")}
                value={dataPeople.cep}
                name="cep"
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    e.target.getAttribute("name")
                  )
                }
              />
            </Form.Group>
            <Button type="submit" variant="dark">
              Atualizar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
