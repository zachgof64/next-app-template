import React, {FC} from 'react';
import styles from '../styles/Index.module.scss';

const Index: FC = () => (
  <div id="index-pg" className={styles.indexFlex}>
    <img src="vercel.svg" alt="Vercel" id="vercel-img"/>
    <h1 id="welcome-txt">Welcome to your next app</h1>
  </div>
);

export default Index;
