-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 09 avr. 2026 à 00:27
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sae_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `sae`
--

CREATE TABLE `sae` (
  `id` bigint(20) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `semestre` varchar(255) DEFAULT NULL,
  `domaine` varchar(255) DEFAULT NULL,
  `competences` varchar(255) DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `note` double DEFAULT NULL,
  `taux_reussite` double DEFAULT NULL,
  `ue` varchar(255) DEFAULT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `lien_site` varchar(255) DEFAULT NULL,
  `lien_code` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `auteurs` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sae`
--

INSERT INTO `sae` (`id`, `titre`, `description`, `semestre`, `domaine`, `competences`, `date_debut`, `date_fin`, `note`, `taux_reussite`, `ue`, `annee`, `lien_site`, `lien_code`, `image_url`, `auteurs`) VALUES
(1, 'Site portfolio', 'Création d\'un site portfolio responsive en HTML/CSS/JS', 'S3', 'Web', 'HTML, CSS, JavaScript', '2024-09-01', '2024-11-30', 16.5, 88, 'UE3', 'MMI2', 'https://exemple.com', 'https://github.com/exemple', 'https://picsum.photos/400/300?random=1', 'Alice Martin, Bob Dupont'),
(2, 'Application mobile', 'Développement d\'une app React Native de gestion de tâches', 'S4', 'Développement', 'React Native, API REST', '2024-01-10', '2024-03-20', 18, 95, 'UE4', 'MMI2', 'https://exemple.com', 'https://github.com/exemple', 'https://picsum.photos/400/300?random=2', 'Claire Durand, David Leroy'),
(3, 'Identité visuelle 3D', 'Motion design et modélisation 3D pour une marque fictive', 'S5', '3D', 'Blender, After Effects', '2024-09-15', '2025-01-15', 15, 80, 'UE5', 'MMI3', 'https://exemple.com', 'https://github.com/exemple', 'https://picsum.photos/400/300?random=3', 'Emma Bernard, François Petit'),
(4, 'Dashboard interactif', 'DataViz interactive avec D3.js et données ouvertes', 'S5', 'Développement', 'D3.js, JavaScript, API', '2024-10-01', '2025-01-30', 17.5, 92, 'UE5', 'MMI3', 'https://exemple.com', 'https://github.com/exemple', 'https://picsum.photos/400/300?random=4', 'Gabriel Moreau, Hélène Simon'),
(5, 'Campagne DI', 'Dispositif d\'information sur le développement durable', 'S3', 'DI', 'Figma, Communication', '2024-09-01', '2024-12-15', 14, 75, 'UE3', 'MMI2', 'https://exemple.com', 'https://github.com/exemple', 'https://picsum.photos/400/300?random=5', 'Inès Thomas, Jules Richard'),
(6, 'Biosphère ', '', 'S3', 'Web', '', '2024-09-01', '2025-01-31', NULL, NULL, '', 'MMI2', '', '', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `sae`
--
ALTER TABLE `sae`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `sae`
--
ALTER TABLE `sae`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
