package com.mitrais.rms;

import com.mitrais.rms.common.dao.LookupDAO;
import com.mitrais.rms.employee.dao.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    LookupDAO                        lookupDAO;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

        // Employee Repository
//        Employee employee1 = new Employee("Frodo", "Baggins", "Ring bearer", "M", new Date(), "S", "AU", "CON", "JB",
//                "CDCA", null, new Date(), "PG", "frodo.baggins@rms.com", "+628123565787");
//        employee1.setRecordStatusID(RMSConstantsIntf.RecordStatus.ACTIVE);
//        Employee employee2 = new Employee("Bilbo", "Baggins", "Burglar", "M", new Date(), "S", "AU", "CON", "JB",
//                "CDCA", null, new Date(), "PG", "bilbo.baggins@rms.com", "+628123565787");
//        employee2.setRecordStatusID(RMSConstantsIntf.RecordStatus.ACTIVE);
//        Employee employee3 = new Employee("Albertus", "Mahaputra", "", "M", new Date(), "S", "AU", "CON", "JB", "CDCA",
//                null, new Date(), "PG", "mila.khan@rms.com", "+628123565787");
//        employee3.setRecordStatusID(RMSConstantsIntf.RecordStatus.ACTIVE);
//        Employee employee4 = new Employee("Karina", "Cindy Alika", "", "F", new Date(), "S", "AU", "CON", "JB", "CDCA",
//                null, new Date(), "PG", "karina.cindy@rms.com", "+628123565787");
//        employee4.setRecordStatusID(RMSConstantsIntf.RecordStatus.ACTIVE);
//        Employee employee5 = new Employee("Nicholas", "Kondang", "", "M", new Date(), "S", "AU", "CON", "JB", "CDCA",
//                null, new Date(), "PG", "nicholas.kondang@rms.com", "+628123565787");
//        employee5.setRecordStatusID(RMSConstantsIntf.RecordStatus.ACTIVE);
//
//        this.repository.save(employee1);
//        this.repository.save(employee2);
//        this.repository.save(employee3);
//        this.repository.save(employee4);
//        this.repository.save(employee5);

        // Lookup repository
//        lookupDAO.save(new Lookup("DivisionID", 1, "Java", "JP"));
    }
}