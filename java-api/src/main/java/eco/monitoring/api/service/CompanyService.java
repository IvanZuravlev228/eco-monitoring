package eco.monitoring.api.service;

import eco.monitoring.api.model.Company;

import java.util.List;

public interface CompanyService {
    Company save(Company company);

    Company getById(Long id);

    List<Company> getAll();

    void saveAll(List<Company> companies);

    Company update(Long prevId, Company newCompany);

    Company findByName(String name);

    void deleteById(Long id);
}
