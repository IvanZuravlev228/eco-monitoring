package eco.monitoring.api.service.impl;

import eco.monitoring.api.model.Company;
import eco.monitoring.api.repository.CompanyRepository;
import eco.monitoring.api.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;

    @Override
    public Company getById(Long id) {
        return companyRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Can't find company by id: " + id));
    }

    @Override
    public List<Company> getAll() {
        return companyRepository.findAll();
    }

    @Override
    public void saveAll(List<Company> companies) {
        companyRepository.saveAll(companies);
    }

    @Override
    public Company update(Long prevId, Company newCompany) {
        Company prevCompany = getById(prevId);
        newCompany.setId(prevCompany.getId());
        return companyRepository.save(newCompany);
    }
}
