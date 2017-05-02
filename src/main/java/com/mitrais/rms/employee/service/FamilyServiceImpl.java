package com.mitrais.rms.employee.service;

import java.util.List;
import java.util.stream.Stream;

import com.mitrais.rms.common.dao.LookupRepository;
import com.mitrais.rms.common.model.Lookup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mitrais.rms.employee.dao.FamilyRepository;
import com.mitrais.rms.employee.model.Family;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
@Service
public class FamilyServiceImpl implements FamilyService {

    @Autowired
    private FamilyRepository familyRepo;

    @Autowired
    private LookupRepository lookupRepo;

    @Override
    public List<Family> searchByEmployee(String employeeGUID) {
        List<Family> families = familyRepo.searchByEmployee(employeeGUID);
        List<Lookup> gender = lookupRepo.findByLookupName("genderid");
        List<Lookup> familyType = lookupRepo.findByLookupName("familytypeid");

        for (Family family : families) {
            Lookup genderName = gender.stream()
                    .filter(lookup -> lookup.getLookupCode().equalsIgnoreCase(family.getGenderID())).findFirst()
                    .orElse(new Lookup());
            family.setGenderStr(genderName.getLookupText());

            Lookup familyTypeName = familyType.stream()
                    .filter(lookup -> lookup.getLookupValue() == family.getFamilyTypeID()).findFirst()
                    .orElse(new Lookup());
            family.setFamilyTypeStr(familyTypeName.getLookupText());
        }

        return families;
    }
}
