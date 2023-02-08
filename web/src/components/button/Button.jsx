import Button from "react-bootstrap/Button";

export default function TypesExample(props) {
  const { title } = props;
  return <Button variant="dark">{title}</Button>;
}
