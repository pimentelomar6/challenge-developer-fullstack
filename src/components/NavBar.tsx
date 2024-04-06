import { Icon } from "./Icon";

export const NavBar: React.FC = () => {
  return (
    <div className="navigator">
      <a href="/">
        <Icon label="Reservar" />
      </a>

      <Icon label="Mis Turnos" />
    </div>
  );
};
