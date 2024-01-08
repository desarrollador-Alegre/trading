import styles from "./Login.module.scss";
import * as React from "react";


export default function Login() {
 

  return (
      <div className={styles.loginRedes}>
        <h1>Iniciar sesión</h1>
        <p>
          ¿Aún no tiene una cuenta? <a href="/auth/register">Regístrese</a>
        </p>
       
    </div>
  );
}
