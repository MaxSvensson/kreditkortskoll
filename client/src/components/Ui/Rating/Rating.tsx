import React from 'react';
import styles from './Rating.module.css'

const Rating : React.FunctionComponent<{rating : string, className? : string}> = ({rating, className}) => {
    let Rating;
    switch  (parseInt(rating)) {
        case 1:
            Rating = (
                <div>
                    <span className={styles.light}><i className="fas fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                </div>
            )
            break;
        case 2:
            Rating = (
                    <div>
                         <span className={styles.light}><i className="fas fa-star"></i></span>
                         <span className={styles.light}><i className="fas fa-star"></i></span>
                         <span className={styles.dark}><i className="far fa-star"></i></span>
                         <span className={styles.dark}><i className="far fa-star"></i></span>
                         <span className={styles.dark}><i className="far fa-star"></i></span>
                    </div>
                )
            break;
        case 3:
            Rating = (
                    <div>
                         <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.dark}><i className="far fa-star"></i></span>
                        <span className={styles.dark}><i className="far fa-star"></i></span>
                    </div>
                )
            break;
        case 4:
            Rating = (
                    <div>
                         <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.dark}><i className="far fa-star"></i></span>
                    </div>
                )
            break;
        case 5:
            Rating = (
                    <div>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                        <span className={styles.light}><i className="fas fa-star"></i></span>
                    </div>
                )
            break;
        default:
            Rating = (
                <div>
                     <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                    <span className={styles.dark}><i className="far fa-star"></i></span>
                </div>
                )
            break;
    }
        return  <div className={className}>{Rating}</div>;
}

export default Rating;