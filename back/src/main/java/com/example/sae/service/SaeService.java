package com.example.sae.service;

import com.example.sae.model.Sae;
import com.example.sae.repository.SaeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service   // Dit à Spring que c'est un service
public class SaeService {

    @Autowired  // Spring injecte automatiquement le repository
    private SaeRepository saeRepository;

    // Récupérer toutes les SAé
    public List<Sae> getAllSaes() {
        return saeRepository.findAll();
    }

    // Récupérer une SAé par son ID
    public Optional<Sae> getSaeById(Long id) {
        return saeRepository.findById(id);
    }

    // Récupérer les SAé d'une année (MMI2 ou MMI3)
    public List<Sae> getSaesByAnnee(String annee) {
        return saeRepository.findByAnnee(annee);
    }

    // Récupérer les SAé d'un domaine
    public List<Sae> getSaesByDomaine(String domaine) {
        return saeRepository.findByDomaine(domaine);
    }

    // Récupérer les SAé classées par note
    public List<Sae> getSaesClasseesParNote() {
        return saeRepository.findAllByOrderByNoteDesc();
    }

    // Ajouter une nouvelle SAé
    public Sae addSae(Sae sae) {
        return saeRepository.save(sae);
    }
}