package eco.monitoring.api.repository;

import eco.monitoring.api.model.Pollutant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollutantRepository extends JpaRepository<Pollutant, Long> {
}
