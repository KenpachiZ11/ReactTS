import React from 'react';
import styles from './App.module.scss';

interface ObjModel {
  name: string;
  age: number;
}

function ModelPerson({name, age}: ObjModel) {
  return (
    <>
      <h1>{name}</h1>
      <h3>{age}</h3>
    </>
  )
}


function App() {
  return (
    <div className={styles['*']}>
      ReactTS

      <div className={styles.app_styles}>
        <ModelPerson name='Alex' age={24} />
      </div>
    </div>
  );
}

export default App;
