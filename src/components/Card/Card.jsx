import img from "../../img/placeholder-600x400.png";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={"card " + "text-left " + styles.cardmain}>
      <img src={img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">Titolo del Post</h5>
        <p className="card-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          reiciendis, velit dolorem iure recusandae assumenda iste deserunt
          nulla rerum hic quam commodi corrupti, expedita modi! Ullam, harum?
        </p>
      </div>
    </div>
  );
}
