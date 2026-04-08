package com.example.sae.repository;

import com.example.sae.model.Sae;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SaeRepository extends JpaRepository<Sae, Long> {

    // Spring génère automatiquement le SQL pour ces méthodes !
    List<Sae> findByAnnee(String annee);           // SAé par année (MMI2/MMI3)
    List<Sae> findByDomaine(String domaine);       // SAé par domaine
    List<Sae> findAllByOrderByNoteDesc();          // SAé triées par note
}