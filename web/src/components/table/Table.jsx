import { useState, useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import PeopleApi from "../../utils/api";
import ModalUpdateForm from "../updateForm/ModalUpdateForm";

export default function Table() {
  const [peoples, setPeoples] = useState([]);

  async function handlePeoples() {
    return await PeopleApi.get().then((response) => {
      setPeoples(response.data.peoples);
    });
  }
  useEffect(() => {
    handlePeoples();
  }, []);

  async function removePeople(id, name) {
    const allowDelete = window.confirm(
      `Realmente deseja apagar a pessoa ${name} (id ${id})?`
    );
    if (!allowDelete) {
      return;
    }
    await PeopleApi.delete(id)
      .then(handlePeoples)
      .catch((error) => {
        alert("Ops!, algo deu errado não foi possivel deletar a pessoa.");
        console.log(error);
      });
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-bordered table-dark table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {peoples &&
                peoples.map((people) => (
                  <tr key={people.id}>
                    <th scope="row">{people.id}</th>
                    <td>{people.nome}</td>
                    <td>{people.idade}</td>
                    <td>exibir</td>
                    <td className="btn-table">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example">
                        <ModalUpdateForm data={people} />
                        <button
                          className="btn btn-dark"
                          onClick={() => removePeople(people.id, people.name)}>
                          <BsFillTrashFill className="icon-color" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
