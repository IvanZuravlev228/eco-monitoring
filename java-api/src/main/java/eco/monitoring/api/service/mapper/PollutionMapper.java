package eco.monitoring.api.service.mapper;

import eco.monitoring.api.dto.pollution.PollutionRequestDto;
import eco.monitoring.api.dto.pollution.PollutionResponseDto;
import eco.monitoring.api.model.Pollution;
import eco.monitoring.api.service.CompanyService;
import eco.monitoring.api.service.PollutantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class PollutionMapper {
    private final PollutantService pollutantService;
    private final CompanyService companyService;

    public PollutionResponseDto toDto(Pollution pollution) {
        PollutionResponseDto dto = new PollutionResponseDto();
        dto.setId(pollution.getId());
        dto.setPollutantId(pollution.getPollutant().getId());
        dto.setCompanyId(pollution.getCompany().getId());
        dto.setValuePollution(pollution.getValuePollution());
        dto.setYear(pollution.getYear());
        return dto;
    }

    public Pollution toModel(PollutionRequestDto dto) {
        Pollution model = new Pollution();
        model.setPollutant(pollutantService.getById(dto.getPollutantId()));
        model.setCompany(companyService.getById(dto.getCompanyId()));
        model.setValuePollution(dto.getValuePollution());
        model.setYear(dto.getYear());
        return model;
    }
}
