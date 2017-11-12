package hu.elte.alkfejl.orarend.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/search")
public class SearchApiController {

    @GetMapping()
    public String search(
            @RequestParam(value = "filter") String filter,
            @RequestParam(value = "by", defaultValue = "any") String by
    ) {
        return "search " + filter + " by " + by;
    }
}
