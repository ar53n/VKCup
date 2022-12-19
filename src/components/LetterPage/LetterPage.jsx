import Avatar from "../Avatar/Avatar";
import Flag from "../Flag/Flag";
import styles from "./Letter.module.css";

const letter = {
  author: {
    name: "Гедвина",
    surname: "Коломцева",
    email: "singledrowning@mail.ru",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEMUlEQVR4nO3d/28adRzH8dd9gwPKl9H1K1Pc4trVzGw/GGNMqj/ULNO/yj9raqJJZ7JlVZNlmWXrSo1SirUUKOX4cnDnD9ODW4qlHS2vi+/HT/e53od8mmfKfSGhivvN1y4EDXXSCxB+EoSMBCEjQchIEDIShIwEISNByEgQMhKEjAQhI0HISBAyEoSMBCEjQchIEDIShIwEISNByEgQMhKEjAQhI0HISBAyEoSMBCEjQchIEDIShIwEISNByEgQMhKEjAQhI0HISBAyEoSMBCEjQchIEDIShIwEISNByOiTXsDb6jSb6HbacF3AMMMImSYAZdLLOrdABmlUKyhubuKwWETHavh+ZoRNXMksYnHpFuIzMxNa4fkFKojT62J7YwOlVy+BIV8qZbdb2M/nsb+Tx0z2Om5+8ik0Izi/ZmBW2uvaePbdt6gfHPj2G5EIookEAAXNer3/F+MCf/22A6taxYf37sEIm5e/6HMIRhDXRW593RcjkkjgxkcfI51ZhHfOcF1U/ywh/9MGGpUKgNdvb7mH67i99gUUhf8ahn+FAMqFAg53C944lk7j7v2vkM5k4DuBKwpS8wu4c/9LJGZnvd3VvT2UtrYuccXnF4ggvz976m2ruo6V1c+hh8NDj9d0Ayurn0EPhbx9hV+fw3X4v82QPkjHsnBcLnvjmex7iCQSp84LRWOYf/+mN27V6zguH/zHDA70Qaqlkm88/c67I8+9ms36xrX90pAjedAHaR7VfOP49PTIc2PpNBS1f46xakdjW9dFoQ9it9r9gQKEopGR56qqBj3UP9fY7dY4l3Yh6IN07Y63rWkGzvpYRDMMb7tnd8e1rAtDH0TVNW/b6fUA92xXSj3b9ra1gddiRR/EGHjLcV3H9xdzGtdx0e30jx98+2JFH8SMx33jf+/AR2HVqnAdZ+hrMaIPMnjHDQCV4u7Ic988dio9+hXapNAHiaVSCMdi3ri0ve07Lwzj9HrY23rpjVVdR3Ju7kLWOE70QQAFmZUPvJHdbOLVk8enntx3fvkZrXrdG89ev+F7lMIqAEGAhaUlRJMpb7yfzyP348MT7yt6to2tx49QzG16+4ywieydu5ey1relBOX/h1i1Kp4+eIBup3+jqBkGpq9dQzSZgqIqsGpHKBf+QLfdP0bVdNxeW0Nybn4Syz6zwAQBXj9Gef7D92gejfYIxJyK49bqKuJXg/NRbqCCAP+crF+8wG5uE+3G8YnHmLEpLCwvY2F5GZpunHgMq8AFGWTVamhUDmG323AdB4ZpInYljVgqdfpkUsH4CHeIaDKJaDI56WWMVSCusv5PJAgZCUJGgpCRIGQkCBkJQkaCkJEgZCQIGQlCRoKQkSBkJAgZCUJGgpCRIGQkCBkJQkaCkJEgZCQIGQlCRoKQkSBkJAgZCUJGgpCRIGQkCBkJQuZvZpEgQ+S4F2AAAAAASUVORK5CYII=",
  },
  to: [
    {
      name: "Лионора",
      surname: "Мялкина",
      email: "spongyviper@mail.ru",
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEaklEQVR4nO3c3U9adxjA8e85gBwULGChCrUt9mVm0bYXdW229KYXvd6SZX/P/q21y7KLzi3bajJpXdU5FXzBFxAR8IW3XTQyaSeu6uT5Zc/nyh/+TB7z5XDOgQSr8c3XDZQYdqcHUK00iDAaRBgNIowGEUaDCKNBhNEgwmgQYTSIMBpEGA0ijAYRRoMIo0GE0SDCaBBhNIgwGkQYDSKMBhFGgwijQYTRIMJoEGE0iDAaRBgNIowGEUaDCKNBhNEgwmgQYTSIMBpEGA0ijAYRRoMIo0GE0SDCaBBhNIgwGkQYDSKMu9MDnEW9VmW/VKZWqeD2duFxHFxuT6fHOhPjgtSqFVZnZthYmKe0laNRb/0yo+5LQUKxGLHhYRx/oENTnp5RQYrZLK+//46DcvnYPeXtPOXtPCvTbxgcGeX6vfsXOOHZGRNkr1Qk+e0zqgcHzcfcXi8+fwCP46W6X2G3uE1lbx+ARr1OavI3bNvF4Ohop8b+YMYEWZiYaMawbRe3P/2MaOIGYB3Z1WBjYYGZ8R+o12oApF8l6b9zG4/XueiRT8WIq6x6tcpmarG5vnbvPtFEgtYYABaRGwluPXzUfKRWrZBLL13MoOfAiCD75TKNer25Dlzua7s/mhjC7fXS5fjojUZpNMz5FkMjXrLcXV0t67U/5ghe6Qfr3SPkLcu2efTlV1i2Ec+3FkYE8TgOjj/AXnEHgPX5OQ52SwzcGSY4MPBeMMDIGGBIEIDBkVFmfxpvrvOZDPlMBsu26I1cIRyPE4rH6QmGOjjl2VkmfU3s3C8/s/Lm97Z7vN3dhK8OEk0M0RuJHPuyJpVRQQByy0ukXyUpbKzDCZP3hMLc+uQhvdHoxQx3DowLcmivuMNmKsXW8jKFjfXmfce7bNvFx0+eEBqIXfCEp2NskKPqtSr5zBpbK8vklpfY29lp+b23x8/Y518YcaI35qTeju1yE47HCcfj3HwwxtbqCtMvXlDZ3wNgv1Rke32NYP9Ahyc9mfynDFDK5cjMzjL/8lfmJ16232xZhGJxhsYetDy8Wyj8hxOeHyOOkNXZGVZnpgGw3W4GR0b/8d7jqO5LwZa1y23Ev2rGERKKxZs/16tVlqZen/g3uaV0y7o7GDxmpyxGBAlfjeME/v6wKZ1Msjw1xXHXvZuLi6SSk811bySCP9z+/S8pjLnKymdWST5/ztEIjj9AKB7D6fHTaLw9eRezWXaym809LreH0adPCfRd7sDUH86YIADrf84x8+N4yzu/7Xi8Dh89fmzMPQgYclI/FB26ib+vj9TkJNl06tibQY/PR+T6Da7dvWvMB1OHjDpCjqpVqpS2cuwWClQrB1iWhcfnw+cP4O8L8/6HV2Yw6gg5yuVx0xuNGvU+1b9hxFXW/4kGEUaDCKNBhNEgwmgQYTSIMBpEGA0ijAYRRoMIo0GE0SDCaBBhNIgwGkQYDSKMBhFGgwijQYTRIMJoEGE0iDAaRBgNIowGEUaDCKNBhNEgwmgQYTSIMH8BI8kx9rgH7HoAAAAASUVORK5CYII=",
    },
    {
      name: "Конрадина",
      surname: "Харахордина",
      email: "heedlesstremor@mail.ru",
    },
    {
      name: "Венчана",
      surname: "Вильковская",
      email: "gentlelinguist@mail.ru",
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE8UlEQVR4nO3d208iZxjH8d8AAyigKK54QLdb1K1O2wvTmnSbHtb0D+sf1Tbrxk22ttn2ok2ru6m2gMeuC6KCDsPAMIde6A7iesAD8rzp87maAd7kCd8MDANRyZn71gEjw9PuAVgjDkIMByGGgxDDQYjhIMRwEGI4CDEchBgOQgwHIYaDEMNBiOEgxHAQYjgIMRyEGA5CDAchhoMQw0GI4SDEcBBiOAgxHIQYDkIMByGGgxDDQYjhIMRwEGI4CDEchBgOQgwHIYaDEMNBiOEgxHAQYjgIMRyEGA5CDAchhoMQ42v3ADdh1UxUyyU4jgM5EIS/o6PdI92YcEEc20Y2nUIunUZpfx+OY7v3BcMRxJNJJBQFHq8Pm0uLOMjlAACx0VEMPfygXWM3Tagguqpi+cfn0Ar7Z95fKanYWPwTuUwGU18/hlYsoJh9AwDojEbvctRrEyZIRVWxNPcEhl6u3ygBoWgP5EAQNaMKbb8AwEGlpOLl/FMEOkNtm/e6hAjiODZWfl5oiNEzNIzkpzPo6Opyb6tqGlZ//w27G+uoVSqoVSrtGPdGhDjLyq+tQd3ddffv3X8PyuxsQwwACIRCmPziSwxPTt31iLdGiCDb//ztbvs7Qxj/7BEk6ZzRJQkPpj9BOBa7o+luF/kghl6Gmq8fHYPj4/DK8oVrJI+ExJTS6tFagnyQwuttAPW/09k7nGhqXe/wyPlHEWHkJ9bVwxN7EkI9PU2t88o+BCOR1gzVQuSDGLrubvv8MiRP8yPLwUArRmop8kHMquFuX/UlyOsT4qy+AfkgXrn+pFqWeaW1lnG1x1NAPogcDLrbtmnCNKpNrzUq+uUPIoZ8kNOfJ0r7Z1/HOs00qqhoaitGainyQbr74wAkd39va6updXubWyfPloVBPkggFELP0JC7v7OaQbVcvmAFYFsW/v3rVatHawnyQQAgoSjuQWIaBlYWnsM0jDMf69gOUr+8QPng4A4nvD1CBIkODCL+/pi7f5jP44/vv0N+fQ328ZmXY9sobL/G4pMfsLO22q5Rb0yYE/XkzAx09RCHOzsAjr6MWvlpAQDg8weOj5j6m0Z0YADFbNbd91zhA2U7iTElAK9Pxoez3yCeHDv5Hg8Ax6fC9Rjx5Bgmv3rcuP6SC5JUCHOEAEdP6sSjzzE48RD59TUUs29glHVYtRr8nZ3ojscRHxtDd38clll7Z60IhAryVqSvD5G+vgsfY5160/f5/a0c6dYI8ZJV2ts796zqPJWS1rAvyk+EhDhClp7OwTJrkDs6MPrRx039nCe/sV7fkYBwrxjfIApxhARCR78eqek6sqkUHPvij+DlgyJymZS7H4nda7gmRpkQQWKjI+62VthH6tcXsGpnX8lV83m8nJ9vuH9EEefrXCFeshJTCnKptHv1NpdJY29rE139/QiGI/B4vTD0MrRiEdqpi48D4xOIjd5vx9jXIonyjyXLB0W8evYMVa3U5AoJCUXBg+lpvPPBhTBhggCAZdawvbyMbCaNinr2pXWP14feRAIJRUEkdvGpMUVCBTmpUlKhFYowjSoc24ZXlhEMRxCKRuER8Kvbt4SdPBiOIBgW71cllxHiLOv/hIMQw0GI4SDEcBBiOAgxHIQYDkIMByGGgxDDQYjhIMRwEGI4CDEchBgOQgwHIYaDEMNBiOEgxHAQYjgIMRyEmP8AQ8Zxsl+gh38AAAAASUVORK5CYII=",
    },
    {
      name: "Гызгайыт",
      surname: "Завирюха",
      email: "impromptuchimp@mail.ru",
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAABmElEQVR4nO3ZsUoDQRRG4atIdJNspekssqDYpNFGydP5Wj5HGlOIhWCCWgRMsRAldgPWE5gzcL7udj8cdpo92j897kMYx6UH6D+DwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBOSk9INf312e8Py/T3d3dxmA4KrgoT/VB+u02Pl5f0n05m8VgWHBQJp8sGIPAVP9kjc8v4ur+Id2nTVNwTb7qgzRtG017U3rGwfhkwRgEpvona7Nexdtike7r+TzORuOCi/JUH2TX97FZr9L9u/spuCafTxaMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCU/0/9cm0i8m0Kz3jYPxCYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQjMH4ddIKDEATsuAAAAAElFTkSuQmCC",
    },
    {
      name: "Минле",
      surname: "Подшибнова",
      email: "overstuffednovelist@mail.ru",
    },
    { name: "Джуди", surname: "Крупейникова", email: "coniccaravan@mail.ru" },
    { name: "Шарка", surname: "Панфилва", email: "foldedcranny@mail.ru" },
  ],
  title: "Дивергентная натурфилософия интеллигибельна.",
  text: "Интеллигибельность предполагает гедонизм. Подтекст, тем не менее, индуцировав, включает в себя амбивалентность. Индукция вполне возможна. Но мир примитивен. Имманентный парадокс включает в себя заблуждение — также, не секрет. Однако, подтекст порождает и понимает под собой гедонизм. Двойственный антагонизм, экспонентируя, понимает под собой актуализацию. Архетип, без всякого сомнения, коррелирует и рефлектирует народничество. Космизм очевиден. Здравый смысл, десакрализируя, организует экспрессионизм. Предикат индуцирует и упирается в апперцепцию. Неограниченная монада трансцендентальна. Конечно, методологический параллелизм преобразует космизм. Эпитет контролирует и упирается в народничество. Плюрализм иллюзорен. Статус, откровенно говоря, позволяет и упирается в созерцание. Не секрет, что интеллект индуцирует и коррелирует мир. Не секрет, что интеллигибельность рефлектирует этнос. Характерная реальность типична. Официоз понимает под собой и преобразует катарсис. Прежде всего характерный плюрализм общезначим. Интеллигибельность, как известно, коррелирует метафоризм. Созерцание коррелирует антагонизм. Дуализм, откровенно говоря, включает в себя позитивизм. Абстрактная натурфилософия упирается в апокатастас. Созерцание, определённо, порождает космизм. Трансцендентальная интеллигибельность индуцирован. Метафоризм, по всей вероятности, обходя, преобразует катарсис. Официоз генетивен. Априорная апперцепция интеллигибельна. Благо, абстрагируясь, включает в себя этнос. Дуализм абстрактен. Характерный эпитет позволяет позитивизм. Подтекст заполняет амбивалентность. Но дивергентный мир не всем ясен. Ортодоксальная атомистика материальна.",
  bookmark: false,
  important: false,
  flag: "Финансы",
  read: true,
  date: "2022-11-10T15:23:46.562Z",
};

export default function LetterPage(props) {
  return (
    <div class={styles.root}>
      <div class={styles.title}>
        <h1 class={styles.titleText}>Отчет о финансовых результатах</h1>
        <Flag
          style={{ display: "flex", "margin-left": "auto", height: "32px", 'align-items': 'center' }}
          width={16}
          height={16}
          flag={letter.flag}
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
              {letter.author?.name} {letter.author?.surname}
            </span>
            <span style={{ "margin-left": "8px" }} class={styles.footnote}>
              {letter.date}
            </span>
          </div>
          <div class={styles.footnote}>
            Кому:{" "}
            {letter.to
              .map((author) => `${author.name} ${author.surname}`)
              .join(", ")}
          </div>
        </div>
      </div>
      <div class={styles.letterText}>{letter.text}</div>
    </div>
  );
}
