package eco.monitoring.api.repository;

import eco.monitoring.api.model.Pollution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PollutionRepository extends JpaRepository<Pollution, Long> {
}
