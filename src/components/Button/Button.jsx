import { splitProps, mergeProps } from "solid-js";
import styles from "./Button.module.css";
import "./Button.css";
function Button(props) {
    const defaultProps = {
      variant: 'aqua',
      fullWidth: false,
    };

  const propsWithDefault = mergeProps(props, defaultProps)
  const [locals, other] = splitProps(propsWithDefault, ["color", "variant", "fullWidth", "textAlign"]);

    console.log(locals)
  return (
    <button
      {...other} 
      class={styles.root}
      classList={{ 
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
