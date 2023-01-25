import { createEffect, createSignal, For, Show } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import styles from "./Letter.module.css";
import LetterItem from "./LetterItem";
import Button from "../Button/Button";
import BookmarkF from "../../icons/bookmark_f.svg";
import Attachments from "../../icons/attachments.svg";

export default function LetterList(props) {
  const [mails, setMails] = createSignal([]);
  const navigate = useNavigate();
  const params = useParams();
  if (!params.folder) {
    navigate("/inbox");
  }

  createEffect(async () => {
    if (!params.folder) return;
    const res = await fetch(
      `http://localhost:3000/api/email_list/${params.folder}`
    );
    const data = await res.json();
    console.log(data);
    setMails(data);
    console.log(params.folder);
  });

  return (
    <>
      <div class={styles.letterListRoot}>
        <div
          style={{
            padding: "12px",
            display: "flex",
            "align-items": "center",
            "justify-content": "end",
          }}
        >
          <Button style={{color: "var(--color-favorite)"}}>
            <BookmarkF />
          </Button>
          <Button>
            <Attachments />
          </Button>
          <Button style={{height: '100%'}} class={styles.unread}>
            <div class={styles.readIcon} />
          </Button>
        </div>
        <div class={styles.letterListContainer}>
          <For each={mails()}>{(mail, index) => <LetterItem {...mail} />}</For>
        </div>
      </div>
    </>
  );
}
