package eco.monitoring.api.repository;

import eco.monitoring.api.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
