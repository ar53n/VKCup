import { Navigate, Route, Routes } from "@solidjs/router";
import { createContext, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import LetterList from "./components/LetterList/LetterList";
import LetterPage from "./components/LetterPage/LetterPage";
import ArchiveIcon from "./icons/archive.svg";
import BackArrowIcon from "./icons/back_arrow.svg";
import DislikeIcon from "./icons/dislike.svg";
import DraftIcon from "./icons/draft.svg";
import FolderIcon from "./icons/folder.svg";
import LetterIcon from "./icons/letter.svg";
import PlusIcon from "./icons/plus.svg";
import ThemeIcon from "./icons/theme.svg";
import TrashIcon from "./icons/trash.svg";
import Logo from "./logo.svg";
import RouteButton from './RouteButton';

export const ThemeContext = createContext([{ theme: "" }, {}]);

function App() {
  let isMount = false;

  const isDarkTheme = document.querySelector("html").classList.contains("dark");
  const [theme, setTheme] = createSignal({ theme: isDarkTheme ? "dark" : "" });

  createEffect(() => {
    console.log("createEfect theme", theme());
    // if (prev === undefined) return;
    if (!isMount) {
      isMount = true;
      return;
    }
    document.querySelector("html").classList.toggle("dark");
    const darkTheme = document.querySelector("html").classList.contains("dark");
    if (darkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    return darkTheme;
  });

  const signal = [theme, setTheme];

  return (
    <ThemeContext.Provider value={signal}>
      <div class={styles.App}>
        <header class={styles.header}>
          <Logo />
        </header>
        <div>
          <div class={styles.container}>
            <aside>
              <div class={styles.aside}>
                <Button color="white" textAlign="center">
                  Написать письмо
                </Button>
                <RouteButton location="/inbox"
                  style={{ "margin-top": "12px" }}
                >
                  <LetterIcon />
                  Входящие
                </RouteButton>
                <RouteButton location="/important">
                  <FolderIcon />
                  Важное
                </RouteButton>
                <RouteButton location="/sent">
                  <BackArrowIcon />
                  Отправленные
                </RouteButton>
                <RouteButton location="/drafts">
                  <DraftIcon />
                  Черновики
                </RouteButton>
                <RouteButton location="/archive">
                  <ArchiveIcon />
                  Архив
                </RouteButton>
                <RouteButton location="/spam">
                  <DislikeIcon />
                  Спам
                </RouteButton>
                <RouteButton location="/trash">
                  <TrashIcon />
                  Корзина
                </RouteButton>
                <hr />
                <Button color="secondary">
                  <PlusIcon />
                  Новая папка
                </Button>
                <Button
                  onClick={() => {
                    console.log("theme");
                    setTheme((value) => ({
                      theme: value.theme ? "" : "dark",
                    }));
                  }}
                >
                  <ThemeIcon />
                  {theme().theme === "dark" ? "Тема: темная" : "Тема: светлая"}
                </Button>
              </div>
            </aside>
            <main class={styles.main}>
              <Routes>
                <Route path="/" element={<Navigate href="/inbox" />} />
                <Route path="/:folder" element={<LetterList />} />
                <Route path="/:folder/:letterId" element={<LetterPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
