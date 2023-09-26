package eco.monitoring.api.service;

import eco.monitoring.api.model.Pollution;

import java.util.List;

public interface PollutionService {
    Pollution save(Pollution pollution);

    Pollution getById(Long id);

    List<Pollution> getAll();

    void saveAll(List<Pollution> pollutions);
}
