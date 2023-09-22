package eco.monitoring.api.controller;

import eco.monitoring.api.dto.pollution.PollutionRequestDto;
import eco.monitoring.api.dto.pollution.PollutionResponseDto;
import eco.monitoring.api.service.PollutionService;
import eco.monitoring.api.service.mapper.PollutionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pollution")
public class PollutionController {
    private final PollutionService pollutionService;
    private final PollutionMapper pollutionMapper;

    @GetMapping("/{id}")
    public ResponseEntity<PollutionResponseDto> getById(@PathVariable Long id) {
        return new ResponseEntity<>(pollutionMapper.toDto(pollutionService.getById(id)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PollutionResponseDto>> getAll() {
        return new ResponseEntity<>(pollutionService.getAll()
                .stream()
                .map(pollutionMapper::toDto)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> saveAll(@RequestBody List<PollutionRequestDto> pollutions) {
        pollutionService.saveAll(pollutions.stream().map(pollutionMapper::toModel).collect(Collectors.toList()));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
