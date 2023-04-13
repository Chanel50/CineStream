import React from "react";
import "../styles/Home.css";


export const Home = () => {
  
  return (
  <div>
    <div className="conteneur2">
      <div class="container">
        <h2 className="title">Profitez de films, séries à volonté, <br />  avec des forfaits à partir de seulement 3,99 $US par mois.
        </h2>
       
      </div>
      
    </div>
    <div className="section1">
     <div className="container1">
       <img className="ims1" src="/images/Home/Sans titre (97).png" alt="ims1" />
       <h3 className="titreh">Les plus grandes histoires jamais racontées </h3>
       <p className="parah">CineStream est la plateforme de streaming qui propose une large sélection de films, séries et documentaires.</p>
     </div>
     <div className="container1">
       <img className="ims1" src="/images/Home/Sans titre (98).png" alt="ims1" />
       <h3 className="titreh">Expérimentez CineStream en plusiers langue </h3>
       <p className="parah">Des milliers d'heures de séries TV, de films et d'originaux, provenant de tous les mondes merveilleux de </p>
     </div>
     <div className="container1">
       <img className="ims1" src="/images/Home/Sans titre (99).png" alt="ims1" />
       <h3 className="titreh">Des contrôles parentaux faciles à utiliser </h3>
       <p className="parah">Protégez votre famille et surtout vos enfants grâce à nos contrôles parentaux intuitifs.</p>
     </div>
     
    </div>
    <div class="containerr">
        <h2 className="title1">Regardez comme vous le souhaitez
        </h2>
        <img className="ims2" src="/images/Home/Sans titre (100).png" alt="ims2" />
      </div>
      <div class="containerr">
        <h2 className="title1">Des productions originales exclusives
        </h2><br /> 
        <p className="parahh">Des séries TV, des films et des documentaires que vous ne trouverez nulle part ailleurs, provenant des plus grands raconteurs d'histoires du monde.</p>
        <div class="album">
          <div className="row">
            <img className="imgg" src="/images/Home/Sans titre (101).png" alt="imgg"/>
            <img className="imgg" src="/images/Home/Sans titre (102).png" alt="imgg"/>
            <img className="imgg" src="/images/Home/Sans titre (103).png" alt="imgg"/>
          </div>
          <div className="row">
            <img className="imgg" src="/images/Home/Sans titre (104).jpg" alt="imgg"/>
            <img className="imgg" src="/images/Home/Sans titre (105).jpg" alt="imgg"/>
            <img className="imgg" src="/images/Home/Sans titre (106).png" alt="imgg"/>
          </div>
	      </div>
        </div>
        <div class="containerr1">
        <div class="row">
        <div class="card">
            <h2>Questions fréquemment posées?</h2>
            <p> CineStream est un site de streaming qui permet à ses utilisateurs de regarder des films, des séries TV et des émissions en ligne. Le site offre un large choix de contenus provenant de différents pays et genres.<br />

Prix : Le site offre un abonnement mensuel à 9,99 $ qui permet un accès illimité à tous les contenus proposés. Il y a également des options d'abonnement annuel pour les utilisateurs qui souhaitent économiser.<br />

Contenus disponibles : StreamNow propose une large sélection de films, de séries TV et d'émissions de différents genres, notamment des drames, des comédies, des documentaires, des films d'action, des thrillers et bien plus encore. Les contenus sont disponibles dans différentes langues, avec des sous-titres en anglais.<br />

Compatibilité : Le site est accessible via tous les navigateurs web courants et est également disponible sur les appareils mobiles. L'application mobile est disponible sur iOS et Android.<br />

Qualité de diffusion : StreamNow propose une qualité de diffusion HD pour tous les contenus proposés.</p>
        </div>
    </div>
        </div>
  </div>
   
  );
};
