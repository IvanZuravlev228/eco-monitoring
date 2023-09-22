package eco.monitoring.api.dto.pollution;

import lombok.Data;

@Data
public class PollutionRequestDto {
    private Long id;
    private Long companyId;
    private Long pollutantId;
    private Double valuePollution;
    private Integer year;
}
