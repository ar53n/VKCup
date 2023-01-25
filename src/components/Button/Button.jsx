import { splitProps, mergeProps } from "solid-js";
import styles from "./Button.module.css";
import "./Button.css";
import { style } from "solid-js/web";
function Button(props) {
    const defaultProps = {
      variant: 'aqua',
      fullWidth: false,
    };

  const propsWithDefault = mergeProps(props, defaultProps)
  const [locals, other] = splitProps(propsWithDefault, ["color", "variant", "fullWidth", "textAlign"]);
  // const classes = mergeProps(, defaultProps)
  console.log(other.classList)
  return (
    <button
      {...other}
      class={`${styles.root} ${other.class}`}
      classList={{ 
        ...other.classList,
        [`Button-color-${locals.color}`]: Boolean(locals.color),
        [`Button-variant-${locals.variant}`]: Boolean(locals.variant), 
        [`Button-textAlign-${locals.textAlign}`]: Boolean(locals.textAlign), 
        [styles.fullWidth]: locals.fullWidth, 
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
