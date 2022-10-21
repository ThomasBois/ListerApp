/**
* @name localstorage
* @description Données persistantes dans le navigateur
* @author JMS
* @version 1.0
**/

export default {

    save(key, value){

        //on converti les données en string avant l'insertion
        localStorage.setItem(key, JSON.stringify(value));
    },
    load(key){
        const value = localStorage.getItem(key);
        if(value != null){
            return JSON.parse(value);
        }

        return null;
    },
    delete(){}
}