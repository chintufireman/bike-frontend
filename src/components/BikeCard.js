import styles from "./Card.module.css";
const BikeCard = ({ logo,productImg,cardColor }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.circle}`} style={cardColor}>
        <img className={`${styles.logo}`} src={logo} />
      </div>
      <div className={`${styles.content}`}>
        <h2>CocaCola</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae
          distinctio cum? Cum impedit blanditiis ut. Voluptatem repellendus
          numquam illum?
        </p>
        <a href="#">Explore</a>
      </div>
      <img src={productImg} className={`${styles.product_img}`}/>
    </div>
  );
};

export default BikeCard;
