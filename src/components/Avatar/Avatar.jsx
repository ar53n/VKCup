import { createMemo } from "solid-js";
import styles from "./Avatar.module.css";

export default function Avatar(props) {
  const letters = createMemo(() => {
    return `${props.author.name[0].toUpperCase()}${props.author.surname[0].toUpperCase()}`;
  });
  return (
    <div class={styles.letterAvatar}>
      <Show
        when={props.author.avatar}
        fallback={
          <span
            style={{
              "background-color": "mediumpurple",
              "user-select": "none",
              display: "flex",
              color: "white",
              "font-size": "13px",
              "font-weight": 700,
              "border-radius": "50%",
              width: "32px",
              height: "32px",
              "justify-content": "center",
              "align-items": "center",
            }}
          >
            {letters()}
          </span>
        }
      >
        <img src={props.author.avatar} />
      </Show>
      <input type="checkbox" />
    </div>
  );
}
