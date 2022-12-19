import { Show, createMemo, createSignal, Switch } from "solid-js";
import { Dynamic } from "solid-js/web";
import { A } from "@solidjs/router";
import Avatar from "../Avatar/Avatar";
import styles from "./Letter.module.css";

import BookmarkIcon from "../../icons/bookmark.svg";
import ErrorIcon from "../../icons/error.svg";
import BookmarkFilledIcon from "../../icons/bookmark_f.svg";
import Flag from "../Flag/Flag";

const formatter = new Intl.DateTimeFormat(undefined, {
  numeric: "auto",
});
const formatterCurrentYear = new Intl.DateTimeFormat(undefined, {
  month: "short",
  day: "2-digit",
});

const formatterCurrentDate = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
});

const currentYear = new Date().getFullYear();
const currentDate = new Date().toDateString();

export default function LetterItem(props) {
  const [read, setRead] = createSignal(props.read);
  const [bookmark, setBookmark] = createSignal(props.bookmark);

  const relativeDate = createMemo(() => {
    const date = new Date(props.date);
    if (currentDate === date.toDateString()) {
      return formatterCurrentDate(date);
    }
    if (date.getFullYear() === currentYear) {
      return formatterCurrentYear.format(date).replace(".", "");
    }
    return formatter.format(date);
  });

  return (
    <A class={styles.linkReset} href={window.btoa(`${props.date};${props.author.email}`)}>
      <div
        class={styles.letterItemRoot}
        classList={{ [styles.unread]: !read() }}
      >
        <div class={styles.author}>
          <div
            onClick={(e) => {
              console.log(e);
              e.stopPropagation();
              setRead((v) => !v);
            }}
            class={styles.readIcon}
          ></div>
          <Avatar {...props}></Avatar>
          <span
            class={styles.authorName}
          >{`${props.author.name} ${props.author.surname}`}</span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setBookmark((v) => !v);
          }}
          class={styles.letterStatus}
        >
          {!bookmark() ? (
            <BookmarkIcon class={styles.bookmark} />
          ) : (
            <BookmarkFilledIcon
              class={styles.bookmarkActive}
              style={{ color: `var(--color-favorite)` }}
            />
          )}
          {props.important && (
            <ErrorIcon
              class={styles.important}
              style={{ color: `var(--color-favorite)` }}
            />
          )}
        </div>
        <span
          style={{
            overflow: "hidden",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            color: "grey",
          }}
        >
          <span class={styles.letterTitle}>{props.title}</span>{" "}
          <span
            style={{
              "margin-left": "8px",
              color: "var(--color-text-secondary)",
            }}
          >
            {props.text}
          </span>
        </span>
        <span class={styles.letterFlag}>
          <Flag short={true} flag={props.flag} />
          {props.doc && <Flag short={true} flag="Вложения" />}
        </span>
        <span class={styles.letterDate}>{relativeDate()}</span>
      </div>
    </A>
  );
}
