import { icons } from "../../assets/icons";
import Statistic from "../Statistic/Statistic";
import styles from "./LeccionTerminada.module.css";

function LeccionTerminada() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Personaje */}

        {/* Titulo */}
        <div className={styles.titleContainer}>
          <div className={styles.title}>¡Completaste la lección!</div>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          <Statistic
            label="Exp totales"
            icon={icons.xpIcon}
            value="12"
            color="#ffc800"
          />
          <Statistic label="Bien" icon={icons.targetIcon} value="56%" />
        </div>
      </div>
    </div>
  );
}

export default LeccionTerminada;
