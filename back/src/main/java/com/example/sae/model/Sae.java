package com.example.sae.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity                  // Dit à Spring que c'est une table en BDD
@Table(name = "sae")     // Nom de la table
@Data                    // Lombok génère automatiquement getters/setters
public class Sae {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String description;
    private String semestre;
    private String domaine;
    private String competences;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private Double note;
    private Double tauxReussite;
    private String ue;
    private String annee;       // "MMI2" ou "MMI3"
    private String lienSite;
    private String lienCode;
    private String imageUrl;
    private String auteurs;
}