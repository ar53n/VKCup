import Avatar from "../Avatar/Avatar";
import Flag from "../Flag/Flag";
import styles from "./Letter.module.css";
import { useParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import Attachments from "../Attachments";


export default function LetterPage(props) {
  const params = useParams();
  const [letter, setLetter] = createSignal({})
  createEffect(async () => {
    const res = await fetch(
      `http://localhost:3000/api/email_list/${params.folder}/${params.letterId}`
    );
    const data = await res.json();
    console.log(data)
    setLetter(data)
  });

  return (
    <div class={styles.root}>
      <div class={styles.title}>
        <h1 class={styles.titleText}>{letter().title}</h1>
        <Flag
          style={{
            display: "flex",
            "margin-left": "auto",
            height: "32px",
            "align-items": "center",
          }}
          width={16}
          height={16}
          flag={letter().flag}
        />
      </div>
      <div class={styles.letterHead}>
        <div
          onClick={(e) => {
            console.log(e);
            e.stopPropagation();
          }}
          style={{
            "min-width": "28px",
            width: "28px",
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "min-height": "100%",
          }}
          class={styles.readIcon}
        ></div>
        <Avatar {...letter} />
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            "align-items": "flex-start",
          }}
        >
          <div>
            <span>
              {letter().author?.name} {letter().author?.surname}
            </span>
            <span style={{ "margin-left": "8px" }} class={styles.footnote}>
              {new Date(letter().date).toLocaleString()}
            </span>
          </div>
          <div class={styles.footnote}>
            Кому:{" "}
            {letter().to
              ?.map((author) => `${author?.name} ${author?.surname}`)
              .join(", ")}
          </div>
        </div>
      </div>
      <Attachments src={letter()?.doc?.img} />
      <div class={styles.letterText}>{letter().text}</div>
    </div>
  );
}
