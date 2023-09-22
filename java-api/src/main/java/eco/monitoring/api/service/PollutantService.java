package eco.monitoring.api.service;

import eco.monitoring.api.model.Pollutant;

import java.util.List;

public interface PollutantService {
    Pollutant getById(Long id);

    List<Pollutant> getAll();

    void saveAll(List<Pollutant> pollutants);
}
