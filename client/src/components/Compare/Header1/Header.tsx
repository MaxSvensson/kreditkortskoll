import React from 'react';
import styles from './Header.module.css'
// Images

const Header : React.FunctionComponent = () => {
    // const typed = useRef(null);

    return <div id={styles.header}>
        <div id={styles.background}>
            <div id={styles.logoBox}>
            </div>
                    <div className="typing"></div>
                    <div id={styles.headingPrimary}>
                    <h1>
                        {/* <Typed
                            strings={['Vi hjälper dig att hitta <br /> det perfekta kreditkortet <br/> för just dig', 'Vi hjälper dig att hitta <br /> det lämpligaste kreditkortet <br/> för just dig...', 'Vi hjälper dig att hitta <br /> det bästa kreditkortet <br/> för just dig...']}
                            typeSpeed={40}
                            backSpeed={50}
                            startDelay={1200}
                            showCursor={false}
                            smartBackspace={true}
                            loop
                            // typedRef={(typed) => { typed = typed; }}
                        > */}
                        <span id={styles.headingPrimaryMain}>Jämför kreditkorten för att hitta det som passar dig bäst</span>
                        
                        {/* </Typed>  */}
                        <span id={styles.headingPrimarySub}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellat non reiciendis deserunt dignissimos at suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?</span>
                    </h1>
                    <div>
                        {/* <ButtonWhite text="Utforska kreditkort" />
                        <ButtonWhite text="Ta vårt test" /> */}
                    </div>
                </div>
        </div>
            {/* <BestCard bestcard={bestcard} /> */}
    </div>
}

export default Header;