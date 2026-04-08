SAE MMI — Application Mobile
TP noté R6.03 Meaux · MMI3

C'est quoi ce projet ?
Une application mobile React Native qui permet de consulter et ajouter des SAÉ (projets étudiants) des promotions MMI2 et MMI3.
Le projet est divisé en deux parties :

Backend → Spring Boot + MySQL (API REST)
Frontend → React Native / Expo (application mobile)


Comment ça marche ?
Application Mobile (React Native)

           ↓
       API REST
           ↓
    Spring Boot
           ↓
    Base MySQL

Installation
1. Base de données
Ouvrir MySQL et créer la base :
sqlCREATE DATABASE sae_mmi;
La table est créée automatiquement au démarrage du backend.

2. Backend (Spring Boot)
Configurer src/main/resources/application.properties :
propertiesspring.datasource.url=jdbc:mysql://localhost:3306/sae_mmi
spring.datasource.username=root
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Lancer WebAppliApplication.java depuis IntelliJ.
Le backend démarre sur : http://localhost:8080

3. Frontend (React Native)
bashcd sae-app
npm install
npm start

⚠️ Pour la connexion à l'API :

Émulateur Android → http://10.0.2.2:8080/sae
Vrai téléphone → http://TON_IP:8080/sae (ex : 192.168.1.20)



API
MéthodeURLActionGET/saeRécupérer toutes les SAÉPOST/saeAjouter une SAÉ
Exemple d'ajout (Postman) :
json{
  "titre": "SAE Mobile",
  "domaine": "Développement",
  "semestre": "S4",
  "auteurs": "ANTUNES Enzo, BAER Oscar",
  "encadrants": "AL SALTI Nadia",
  "note": 16,
  "image": "https://picsum.photos/300",
  "lienSite": "https://monsite.fr",
  "lienCode": "https://github.com/projet"
}

Fonctionnalités

✅ Liste de toutes les SAÉ
✅ Détail d'une SAÉ (auteurs, note, domaine, liens…)
✅ Ajout d'une SAÉ via formulaire
✅ Filtre par domaine (Développement, Création, 3D…)
✅ Tri par note
✅ Galerie d'images


Structure du projet
webAppli/                        ← Backend Spring Boot
├── model/Sae.java
├── repository/SaeRepository.java
├── controller/SaeController.java
└── WebAppliApplication.java

sae-app/                         ← Frontend React Native
├── App.js
└── assets/

Rendu

 Projet réalisé en binôme
 Date limite : 20 mars 2026 à 23h00
Technologie obligatoire : React Native
