import { Outlet, Routes, Route, useNavigate } from "@solidjs/router";
import styles from "./App.module.css";
import Logo from "./logo.svg";
import Button from "./components/Button/Button";
import LetterList from "./components/LetterList/LetterList";
import TrashIcon from "./icons/trash.svg";
import DislikeIcon from "./icons/dislike.svg";
import PlusIcon from "./icons/plus.svg";
import ArchiveIcon from "./icons/archive.svg";
import DraftIcon from "./icons/draft.svg";
import LetterIcon from "./icons/letter.svg";
import BackArrowIcon from "./icons/back_arrow.svg";
import ThemeIcon from "./icons/theme.svg";
import FolderIcon from "./icons/folder.svg";
import LetterPage from "./components/LetterPage/LetterPage";
import { createContext, createEffect, createSignal } from "solid-js";

export const ThemeContext = createContext([{ theme: "" }, {}]);

function App() {
  const navigate = useNavigate();
  const darkTheme = document.querySelector("html").classList.contains("dark");
  const [theme, setTheme] = createSignal({ theme: darkTheme ? "dark" : "" });

  createEffect(() => {
    console.log(theme().theme);
    document.querySelector("html").classList.toggle("dark");
    const darkTheme = document.querySelector("html").classList.contains("dark");
    if (darkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  });

  const signal = [theme, setTheme];

  return (
    <ThemeContext.Provider value={signal}>
      <div class={styles.App}>
        <header class={styles.header}>
          <Logo />
        </header>
        <div class={styles.container}>
          <aside>
            <div class={styles.aside}>
              <Button color="white" textAlign="center">
                Написать письмо
              </Button>
              <Button
                onClick={() => navigate("/inbox")}
                style={{ "margin-top": "12px" }}
              >
                <LetterIcon />
                Входящие
              </Button>
              <Button onClick={() => navigate("/important")}>
                <FolderIcon />
                Важное
              </Button>
              <Button onClick={() => navigate("/sent")}>
                <BackArrowIcon />
                Отправленные
              </Button>
              <Button onClick={() => navigate("/drafts")}>
                <DraftIcon />
                Черновики
              </Button>
              <Button onClick={() => navigate("/archive")}>
                <ArchiveIcon />
                Архив
              </Button>
              <Button onClick={() => navigate("/spam")}>
                <DislikeIcon />
                Спам
              </Button>
              <Button onClick={() => navigate("/trash")}>
                <TrashIcon />
                Корзина
              </Button>
              <hr />
              <Button color="secondary">
                <PlusIcon />
                Новая папка
              </Button>
              <Button
                onClick={() => {
                  console.log("theme");
                  setTheme((value) => ({
                    theme: value.theme ? "" : "dark"
                  }));
                }}
              >
                <ThemeIcon />
                {theme().theme === "dark" ? "Темная тема" : "Светлая тема"}
              </Button>
            </div>
          </aside>
          <main class={styles.main}>
            <div class={styles.letterListRoot}>
              <div class={styles.letterListContainer}>
                <Routes>
                  <Route path="/" element={<Navigate href="/inbox" />} />
                  <Route path="/:folder" element={<LetterList />} />
                  <Route path="/:folder/:letterId" element={<LetterPage />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
