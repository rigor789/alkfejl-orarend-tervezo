package hu.elte.alkfejl.orarend.api;

import hu.elte.alkfejl.orarend.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/search")
public class SearchApiController {

    private final ScheduleService scheduleService;

    @Autowired
    public SearchApiController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping()
    public ResponseEntity<Iterable<String>> search(
            @RequestParam(value = "filter") String filter,
            @RequestParam(value = "by", defaultValue = "any") String by
    ) {
        try {
            ArrayList<String> res = this.scheduleService.getByName("adat");

            return ResponseEntity.ok(res);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().build();
        //return "search " + filter + " by " + by;
    }
}
