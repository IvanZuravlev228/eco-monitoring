package eco.monitoring.api.dto.excel;

import eco.monitoring.api.dto.pollution.PollutionRequestDto;
import eco.monitoring.api.model.Company;
import eco.monitoring.api.model.Pollutant;
import lombok.Data;

import java.util.List;

@Data
public class ExcelFile {
    private List<Company> companies;
    private List<Pollutant> pollutants;
    private List<PollutionRequestDto> pollutions;
}
