package eco.monitoring.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "pollutants")
public class Pollutant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double minMass;
    private Double maxMass;
    private Double gdk;
    private Integer dangerClass;
    private Double rfc;
    private Double sf;
}
