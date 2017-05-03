package com.mitrais.rms.employee.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitrais.rms.common.model.ResponseREST;
import com.mitrais.rms.employee.model.Family;
import com.mitrais.rms.employee.service.FamilyService;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
@RestController
@RequestMapping("/api/familyws")
public class FamilyWS {
    @Autowired
    private FamilyService familyService;

    @GetMapping("/{employeeGUID}")
    public ResponseREST getFamilyByID(@PathVariable("employeeGUID") String employeeGUID) {
        List<Family> families = familyService.searchByEmployee(employeeGUID);

        ResponseREST responseREST = new ResponseREST();
        responseREST.setData(families);
        responseREST.setStatus(ResponseREST.SUCCESS);

        return responseREST;
    }
}
