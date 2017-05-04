package com.mitrais.rms.employee.service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

import com.mitrais.rms.common.RMSConstantsIntf;
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
        List<Lookup> gender = lookupRepo.findByLookupName(RMSConstantsIntf.LookupName.GENDER_ID);
        List<Lookup> familyType = lookupRepo.findByLookupName(RMSConstantsIntf.LookupName.FAMILY_TYPE_ID);

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

    @Override
    public String saveFamily(Family family) {
        family.setId(UUID.randomUUID().toString());
        family = familyRepo.save(family);
        return family.getId();
    }

    @Override
    public Family updateFamily(Family family) {
        Family oriFamily = familyRepo.findOne(family.getId());

        if (oriFamily != null) {
            oriFamily.setFirstName(family.getFirstName());
            oriFamily.setLastName(family.getLastName());
            oriFamily.setGenderID(family.getGenderID());
            oriFamily.setDob(family.getDob());

            familyRepo.save(oriFamily);

            return oriFamily;

        } else {
            return null;
        }
    }

    @Override
    public void deleteFamily(String id) {
        Family oriFamily = familyRepo.findOne(id);
        if (oriFamily != null) {
            oriFamily.setRecordStatusID(RMSConstantsIntf.RecordStatus.DELETE);
            familyRepo.save(oriFamily);
        }
    }
}
