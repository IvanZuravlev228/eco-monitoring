package eco.monitoring.api.dto.pollution;

import lombok.Data;

@Data
public class PollutionResponseDto {
    private Long id;
    private Long companyId;
    private Long pollutantId;
    private Double valuePollution;
    private Double concentration;
    private Integer year;
}
