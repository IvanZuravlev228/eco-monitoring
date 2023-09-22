package eco.monitoring.api.service.impl;

import eco.monitoring.api.dto.excel.ExcelFile;
import eco.monitoring.api.service.CompanyService;
import eco.monitoring.api.service.PollutantService;
import eco.monitoring.api.service.PollutionService;
import eco.monitoring.api.service.mapper.PollutionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ExcelServiceImpl {
    private final CompanyService companyService;
    private final PollutantService pollutantService;
    private final PollutionService pollutionService;
    private final PollutionMapper pollutionMapper;

    public void saveDataFromFile(ExcelFile excelFile) {
        companyService.saveAll(excelFile.getCompanies());
        pollutantService.saveAll(excelFile.getPollutants());
        pollutionService.saveAll(excelFile.getPollutions().stream().map(pollutionMapper::toModel).collect(Collectors.toList()));
    }
}
