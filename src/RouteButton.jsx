import { useNavigate, useMatch } from "@solidjs/router";
import { splitProps } from "solid-js";

import styles from "./App.module.css";
import Button from "./components/Button/Button";

function RouteButton(props) {
  const navigate = useNavigate();
  const [locals, other] = splitProps(props, ["location"]);
  const match = useMatch(() => locals.location);
  console.log(match())
  return (
    <Button
      {...other}
      classList={{
        [styles.activeButton]: Boolean(match()),
      }}
      onClick={() => navigate(props.location)}
    >
      {props.childern}
    </Button>
  );
}

export default RouteButton;
