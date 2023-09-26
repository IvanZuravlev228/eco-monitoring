package eco.monitoring.api.dto.pollution;

import jakarta.validation.constraints.Min;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class PollutionShowResponseDto {
    private Long id;
    @Length(min = 5)
    private String companyName;
    @Length(min = 5)
    private String pollutantName;
    @Min(value = 0)
    private Double valuePollution;
    @Min(2000)
    private Integer year;
}
