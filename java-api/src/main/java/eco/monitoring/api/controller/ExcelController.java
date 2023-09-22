package eco.monitoring.api.controller;

import eco.monitoring.api.dto.excel.ExcelFile;
import eco.monitoring.api.service.impl.ExcelServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/add-excel")
public class ExcelController {
    private final ExcelServiceImpl excelService;

    @PostMapping
    public ResponseEntity<Void> saveDataFromFile(@RequestBody ExcelFile excelFile) {
        excelService.saveDataFromFile(excelFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
