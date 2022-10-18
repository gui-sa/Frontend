import styles from './CarDetails.module.css';

const CarDetails = ({brand,km, price}) => {
  return (
    <div className= {styles.card_car}>
        <h2>{brand} {km} km.</h2>
        <p>Por apenas R$: {price} !!</p>
    </div>
  )
};

export default CarDetails;