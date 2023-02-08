import Button from "../button/Button";

export default function Header() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 d-flex justify-content-around mb-5">
        <h2 className="heading-section">Tabela Pessoas</h2>
        <Button title={"Cadastrar"} />
      </div>
    </div>
  );
}
