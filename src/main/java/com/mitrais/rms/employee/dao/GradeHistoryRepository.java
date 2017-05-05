package com.mitrais.rms.employee.dao;

import org.springframework.data.repository.CrudRepository;

import com.mitrais.rms.employee.model.GradeHistory;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
public interface GradeHistoryRepository extends CrudRepository<GradeHistory, String>, GradeHistoryCustRepository {
}
