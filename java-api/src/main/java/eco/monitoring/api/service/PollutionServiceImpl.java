package eco.monitoring.api.service;

import eco.monitoring.api.model.Pollution;
import eco.monitoring.api.repository.PollutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PollutionServiceImpl implements PollutionService {
    private final PollutionRepository pollutionRepository;

    @Override
    public Pollution getById(Long id) {
        return pollutionRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Can't find by id: " + id));
    }

    @Override
    public List<Pollution> getAll() {
        return pollutionRepository.findAll();
    }

    @Override
    public void saveAll(List<Pollution> pollutions) {
        pollutionRepository.saveAll(pollutions);
    }
}
