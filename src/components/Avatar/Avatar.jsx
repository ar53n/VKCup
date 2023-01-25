import { createMemo, splitProps } from "solid-js";
import styles from "./Avatar.module.css";

export default function Avatar(props) {
  if (!props.author) return null;
  const letters = createMemo(() => {
    return `${props.author.name[0].toUpperCase()}${props.author.surname[0].toUpperCase()}`;
  });
  const [locals, others] = splitProps(props, ["author"]);
  return (
    <div {...others} class={styles.letterAvatar}>
      <Show
        when={props.author.avatar}
        fallback={<span class={styles.letterAvatarFallback}>{letters()}</span>}
      >
        <img src={props.author.avatar} />
      </Show>
    </div>
  );
}
