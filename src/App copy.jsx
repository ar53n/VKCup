import styles from "./App.module.css";
import Logo from "./logo.svg";
import Button from "./components/Button/Button";
import LetterList from "./components/LetterList/LetterList";
import { onMount, createSignal } from "solid-js";
import TrashIcon from './icons/trash.svg';
import DislikeIcon from './icons/dislike.svg';
import PlusIcon from './icons/plus.svg';
import ArchiveIcon from './icons/archive.svg';
import DraftIcon from './icons/draft.svg';
import LetterIcon from './icons/letter.svg';
import BackArrowIcon from './icons/back_arrow.svg';
import ThemeIcon from './icons/theme.svg';
import FolderIcon from './icons/folder.svg';

function App() {
  const [mails, setMails] = createSignal([]);
  onMount(async () => {
    const res = await fetch(`http://localhost:3000/api/email_list`);
    const data = await res.json();
    console.log(data);
    setMails(data);
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Logo />
        {/* <img src={Logo}></img> */}
      </header>
      <div class={styles.container}>
        <aside>
          <div class={styles.aside}>
            <Button color="white" textAlign="center">Написать письмо</Button>
            <Button style={{ "margin-top": "12px" }}><LetterIcon />Входящие</Button>
            <Button><FolderIcon />Важное</Button>
            <Button><BackArrowIcon />Отправленные</Button>
            <Button><DraftIcon />Черновики</Button>
            <Button><ArchiveIcon />Архив</Button>
            <Button><DislikeIcon />Спам</Button>
            <Button><TrashIcon />Корзина</Button>
            <hr />
            <Button color="secondary"><PlusIcon />Новая папка</Button>
            <Button><ThemeIcon />Темная тема</Button>
          </div>
        </aside>
        <main class={styles.main}>
          <div class={styles.letterListRoot}>
            <div class={styles.letterListContainer}>
              <LetterList items={mails} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
