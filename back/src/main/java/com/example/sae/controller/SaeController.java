package com.example.sae.controller;

import com.example.sae.model.Sae;
import com.example.sae.service.SaeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController                  // C'est un contrôleur REST (répond en JSON)
@RequestMapping("/api/saes")     // Toutes les routes commencent par /api/saes
@CrossOrigin(origins = "*")      // Autorise les appels depuis React Native
public class SaeController {

    @Autowired
    private SaeService saeService;

    // GET /api/saes → toutes les SAé
    @GetMapping
    public List<Sae> getAllSaes() {
        return saeService.getAllSaes();
    }

    // GET /api/saes/1 → une SAé par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Sae> getSaeById(@PathVariable Long id) {
        return saeService.getSaeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // GET /api/saes/annee/MMI2 → SAé d'une année
    @GetMapping("/annee/{annee}")
    public List<Sae> getSaesByAnnee(@PathVariable String annee) {
        return saeService.getSaesByAnnee(annee);
    }

    // GET /api/saes/domaine/Web → SAé d'un domaine
    @GetMapping("/domaine/{domaine}")
    public List<Sae> getSaesByDomaine(@PathVariable String domaine) {
        return saeService.getSaesByDomaine(domaine);
    }

    // GET /api/saes/classement → SAé triées par note
    @GetMapping("/classement")
    public List<Sae> getClassement() {
        return saeService.getSaesClasseesParNote();
    }

    // POST /api/saes → ajouter une nouvelle SAé
    @PostMapping
    public Sae addSae(@RequestBody Sae sae) {
        return saeService.addSae(sae);
    }
}