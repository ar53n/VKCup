import { createEffect, createSignal, For, Show } from "solid-js";
import { useNavigate, useParams } from "@solidjs/router";
import styles from "./Letter.module.css";
import LetterItem from "./LetterItem";

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
      `http://localhost:3000/api/email_list?folder=${params.folder}`
    );
    const data = await res.json();
    console.log(data);
    setMails(data);
    console.log(params.folder);
  });

  return (
    <For each={mails()}>{(mail, index) => <LetterItem {...mail} />}</For>
  );
}
