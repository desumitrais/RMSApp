package com.mitrais.rms.employee.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mitrais.rms.common.RMSConstantsIntf;
import com.mitrais.rms.common.dao.LookupRepository;
import com.mitrais.rms.employee.dao.GradeHistoryRepository;
import com.mitrais.rms.employee.model.GradeHistory;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
@Service
public class GradeHistoryServiceImpl implements GradeHistoryService {

    @Autowired
    GradeHistoryRepository gradeHistoryRepo;

    @Autowired
    LookupRepository       lookupRepo;

    @Override
    public List<GradeHistory> searchByEmployee(String employeeGUID) {
        List<GradeHistory> gradeHistories = gradeHistoryRepo.searchByEmployee(employeeGUID);
        return gradeHistories;
    }

    @Override
    public String saveGradeHistory(GradeHistory gradeHistory) {
        gradeHistory.setId(UUID.randomUUID().toString());
        gradeHistory = gradeHistoryRepo.save(gradeHistory);
        return gradeHistory.getId();
    }

    @Override
    public GradeHistory updateGradeHistory(GradeHistory gradeHistory) {
        GradeHistory oriGradeHistory = gradeHistoryRepo.findOne(gradeHistory.getId());

        if (oriGradeHistory != null) {
            oriGradeHistory.setDs(gradeHistory.getDs());
            oriGradeHistory.setGradeID(gradeHistory.getGradeID());
            oriGradeHistory.setStartDate(gradeHistory.getStartDate());
            oriGradeHistory.setEndDate(gradeHistory.getEndDate());

            gradeHistoryRepo.save(oriGradeHistory);

            return oriGradeHistory;

        } else {
            return null;
        }
    }

    @Override
    public void deleteGradeHistory(String id) {
        GradeHistory oriGradeHistory = gradeHistoryRepo.findOne(id);
        if (oriGradeHistory != null) {
            oriGradeHistory.setRecordStatusID(RMSConstantsIntf.RecordStatus.DELETE);
            gradeHistoryRepo.save(oriGradeHistory);
        }
    }
}
