package com.mitrais.rms.employee.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mitrais.rms.common.model.CommonEntity;

/**
 * Created by made_sudarsana on 5/4/2017.
 */
@Entity
@Table(name = "gradehistory")
public class GradeHistory extends CommonEntity implements Serializable {
    @Id
    private String   id;
    @Column(name = "employeeguid", updatable = false, insertable = false)
    private String   employeeGUID;
    @Column(name = "ds")
    private String   ds;
    @Column(name = "gradeid")
    private String   gradeID;
    @Column(name = "startdate")
    private Date     startDate;
    @Column(name = "enddate")
    private Date     endDate;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employeeguid")
    private Employee employee;

    @Transient
    private String   gradeStr;

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getGradeStr() {
        return gradeStr;
    }

    public void setGradeStr(String gradeStr) {
        this.gradeStr = gradeStr;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmployeeGUID() {
        return employeeGUID;
    }

    public void setEmployeeGUID(String employeeGUID) {
        this.employeeGUID = employeeGUID;
    }

    public String getDs() {
        return ds;
    }

    public void setDs(String ds) {
        this.ds = ds;
    }

    public String getGradeID() {
        return gradeID;
    }

    public void setGradeID(String gradeID) {
        this.gradeID = gradeID;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
