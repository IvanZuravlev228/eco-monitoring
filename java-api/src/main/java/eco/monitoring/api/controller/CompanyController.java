package eco.monitoring.api.controller;

import eco.monitoring.api.model.Company;
import eco.monitoring.api.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/companies")
public class CompanyController {
    private final CompanyService companyService;

    @PostMapping
    public ResponseEntity<Company> save(@RequestBody Company company) {
        return new ResponseEntity<>(companyService.save(company), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getById(@PathVariable Long id) {
        return new ResponseEntity<>(companyService.getById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Company>> getAll() {
        // test controller
        // second comment

        return new ResponseEntity<>(companyService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> saveAll(@RequestBody List<Company> companies) {
        companyService.saveAll(companies);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{prevId}")
    public ResponseEntity<Company> update(@PathVariable Long prevId, @RequestBody Company newCompany) {
        return new ResponseEntity<>(companyService.update(prevId, newCompany), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        companyService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
