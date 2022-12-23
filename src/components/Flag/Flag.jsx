import { splitProps } from "solid-js";
import KeyIcon from "../../icons/key.svg";
import RubleIcon from "../../icons/ruble.svg";
import GovernmentIcon from "../../icons/government.svg";
import PlaneIcon from "../../icons/plane.svg";
import ShoppingIcon from "../../icons/shopping.svg";
import TicketIcon from "../../icons/ticket.svg";
import AttachmentsIcon from "../../icons/attachments.svg";
import styles from './Flag.module.css'

export const flags = {
  Регистрации: [KeyIcon, "--color-icon-registrations"],
  Заказы: [ShoppingIcon, "--color-icon-order"],
  Билеты: [TicketIcon, "--color-icon-event"],
  Путешевствия: [PlaneIcon, "--color-icon-travel"],
  Путешествия: [PlaneIcon, "--color-icon-travel"],
  Финансы: [RubleIcon, "--color-icon-finance"],
  Вложения: [AttachmentsIcon, "--color-icon-attach"],
  "Штрафы и налоги": [GovernmentIcon, "--color-icon-fees"],
};

export default function Flag(props) {
  if (!props.flag) return null;

  const [locals, others] = splitProps(props, ["flag", "width", "height", "short"]);

  const [Flag, color] = flags[locals.flag];

  return (
    <div class={styles.root}  {...others}>
      <Flag height={locals.height} width={locals.width} style={{ color: `var(${color})` }} />
      {!props.short && (
        <span style={{ "font-size": "13px", "font-weight": 400, "line-height": '20px', "margin-left": '8px'}}>
          {props.flag}
        </span>
      )}
    </div>
  );
}
