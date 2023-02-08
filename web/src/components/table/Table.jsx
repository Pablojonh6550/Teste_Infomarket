import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";

export default function Table() {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="table-wrap">
          <table class="table table-bordered table-dark table-hover">
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>12</td>
                <td>Exibir</td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example">
                    <button className="btn btn-dark">
                      <BsPencilSquare className="icon-color" />
                    </button>
                    <button className="btn btn-dark">
                      <BsFillTrashFill className="icon-color" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
