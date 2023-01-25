import { splitProps, mergeProps, createEffect } from "solid-js";
// import styles from "./Attachments.module.css";
// import "./Attachments.css";

function Attachments(props) {
  const defaultProps = {
    variant: "aqua",
    fullWidth: false,
  };

  //   const propsWithDefault = mergeProps(props, defaultProps);
  //   const [locals, other] = splitProps(propsWithDefault, [
  //     "color",
  //     "variant",
  //     "fullWidth",
  //     "textAlign",
  //   ]);
  createEffect(() => {
    console.log(props.src && window.atob(props.src.split('data:image/jpg;base64,')[1]).length)
  })

  return <img width={100} height={100} src={props.src}></img>
}

export default Attachments;
