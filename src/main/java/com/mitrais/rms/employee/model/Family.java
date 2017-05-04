package com.mitrais.rms.employee.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mitrais.rms.common.model.CommonEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by made_sudarsana on 5/2/2017.
 */
@Entity
@Table(name = "family")
public class Family extends CommonEntity implements Serializable {

    public static final int FAMILY_TYPE_HUSBAND  = 1;
    public static final int FAMILY_TYPE_WIFE     = 2;
    public static final int FAMILY_TYPE_SON      = 3;
    public static final int FAMILY_TYPE_DAUGHTER = 4;
    public static final int FAMILY_TYPE_BROTHER  = 5;
    public static final int FAMILY_TYPE_SISTER   = 6;

    @Id
    private String          id;
    @Column(name = "employeeguid", updatable = false, insertable = false)
    private String          employeeGUID;
    @Column(name = "firstname")
    private String          firstName;
    @Column(name = "lastname")
    private String          lastName;
    @Column(name = "genderid")
    private String          genderID;
    @Column(name = "dob")
    private Date            dob;
    @Column(name = "familytypeid")
    private Integer         familyTypeID;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employeeguid")
    private Employee        employee;

    @Transient
    private String          genderStr;

    public String getGenderStr() {
        return genderStr;
    }

    public void setGenderStr(String genderStr) {
        this.genderStr = genderStr;
    }

    public String getFamilyTypeStr() {
        return familyTypeStr;
    }

    public void setFamilyTypeStr(String familyTypeStr) {
        this.familyTypeStr = familyTypeStr;
    }

    @Transient
    private String familyTypeStr;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGenderID() {
        return genderID;
    }

    public void setGenderID(String genderID) {
        this.genderID = genderID;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Integer getFamilyTypeID() {
        return familyTypeID;
    }

    public void setFamilyTypeID(Integer familyTypeID) {
        this.familyTypeID = familyTypeID;
    }

    public String getEmployeeGUID() {
        return employeeGUID;
    }

    public void setEmployeeGUID(String employeeGUID) {
        this.employeeGUID = employeeGUID;
    }
}
