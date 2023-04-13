import React from "react";
import "../styles/Notfaund.css";


export const Notfaund = () => {
  return (
    <div>
        <main className='containerf'>
      {[...Array(40)].map((_, index) => (
        <span key={index} className='particle'>
          4
        </span>
      ))}
      {[...Array(20)].map((_, index) => (
        <span key={index} className='particle'>
          0
        </span>
      ))}
      <article className='content'>
        <p>Damnit stranger,</p>
        <p>You got lost in the <strong>404</strong> galaxy.</p>
        <p>
        <button>
        <a href='/Home'>Go back to earth.</a>
         </button>
        </p>
      </article>
    </main>
    </div>
  );
};