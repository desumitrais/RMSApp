package com.mitrais.rms.employee.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

import com.mitrais.rms.common.LookupHelper;
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
        List<String> lookupnames = new ArrayList<>();
        lookupnames.add(RMSConstantsIntf.LookupName.GENDER_ID);
        lookupnames.add(RMSConstantsIntf.LookupName.FAMILY_TYPE_ID);

        List<Lookup> lookups = lookupRepo.findByLookupNameIn(lookupnames);

        for (Family family : families) {
            family.setGenderStr(
                    LookupHelper.getTextOnLookup(lookups, RMSConstantsIntf.LookupName.GENDER_ID, family.getGenderID()));
            family.setFamilyTypeStr(LookupHelper.getValueOnLookup(lookups, RMSConstantsIntf.LookupName.FAMILY_TYPE_ID,
                    family.getFamilyTypeID()));
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
            oriFamily.setFamilyTypeID(family.getFamilyTypeID());
            oriFamily.setDob(family.getDob());
            oriFamily.setRecordStatusID(family.getRecordStatusID());

            familyRepo.save(oriFamily);

            setupFamilyLookup(oriFamily);

            return oriFamily;

        } else {
            return null;
        }
    }

    private void setupFamilyLookup(Family oriFamily) {
        List<String> lookupnames = new ArrayList<>();
        lookupnames.add(RMSConstantsIntf.LookupName.GENDER_ID);
        lookupnames.add(RMSConstantsIntf.LookupName.FAMILY_TYPE_ID);

        List<Lookup> lookups = lookupRepo.findByLookupNameIn(lookupnames);

        oriFamily.setGenderStr(
                LookupHelper.getTextOnLookup(lookups, RMSConstantsIntf.LookupName.GENDER_ID, oriFamily.getGenderID()));
        oriFamily.setFamilyTypeStr(LookupHelper.getValueOnLookup(lookups, RMSConstantsIntf.LookupName.FAMILY_TYPE_ID,
                oriFamily.getFamilyTypeID()));
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
