// Exercice 5

// Créez un dossier ReactJS qui s'appelle "exercice5".
// Supprimez tous les dossiers inutiles.
// Dans le fichier App.js, supprimez tous et créer une class App avec les extends et imports nécessaires.
// Créez un nouveau fichiers appelé Header.js
// Dans ce fichier header, vous allez créer une barre de navigation en JSX et l'importer dans votre fichier App.js


import React, {Component} from 'react';
import Header from './Header';

class App extends Component {
  render(){
    return (
      <Header/>
    );
  }
}

export default App;