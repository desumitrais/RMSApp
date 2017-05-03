package com.mitrais.rms.employee.model;

import com.mitrais.rms.common.model.CommonEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "employee")
public class Employee extends CommonEntity implements Serializable {

    @Id
    private String     id;
    @Column(name = "firstname")
    private String     firstName;
    @Column(name = "lastname")
    private String     lastName;
    @Column(name = "description")
    private String     description;
    @Column(name = "genderid")
    private String     genderID;
    @Column(name = "dob")
    private Date       dob;
    @Column(name = "maritalstatusid")
    private String     maritalStatusID;
    @Column(name = "nationalityid")
    private String     nationalityID;
    @Column(name = "statusid")
    private String     statusID;
    @Column(name = "subdivisionid")
    private String     subDivisionID;
    @Column(name = "divisionid")
    private String     divisionID;
    @Column(name = "suspenddate")
    private Date       suspendDate;
    @Column(name = "hiredate")
    private Date       hireDate;
    @Column(name = "gradeid")
    private String     gradeID;
    @Column(name = "email")
    private String     email;
    @Column(name = "phone")
    private String     phone;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "employee", cascade = CascadeType.ALL)
    public Set<Family> families;

    @Transient
    private String     genderStr;
    @Transient
    private String     maritalStatusStr;
    @Transient
    private String     nationalityStr;
    @Transient
    private String     statusStr;
    @Transient
    private String     subDivisionStr;
    @Transient
    private String     divisionStr;
    @Transient
    private String     gradeStr;

    public Employee() {
    }

    public Employee(String firstName, String lastName, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }

    public Employee(String firstName, String lastName, String description, String genderID, Date dob,
            String maritalStatusID, String nationalityID, String statusID, String subDivisionID, String divisionID,
            Date suspendDate, Date hireDate, String gradeID, String email, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.genderID = genderID;
        this.dob = dob;
        this.maritalStatusID = maritalStatusID;
        this.nationalityID = nationalityID;
        this.statusID = statusID;
        this.subDivisionID = subDivisionID;
        this.divisionID = divisionID;
        this.suspendDate = suspendDate;
        this.hireDate = hireDate;
        this.gradeID = gradeID;
        this.email = email;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getMaritalStatusID() {
        return maritalStatusID;
    }

    public void setMaritalStatusID(String maritalStatusID) {
        this.maritalStatusID = maritalStatusID;
    }

    public String getNationalityID() {
        return nationalityID;
    }

    public void setNationalityID(String nationalityID) {
        this.nationalityID = nationalityID;
    }

    public String getStatusID() {
        return statusID;
    }

    public void setStatusID(String statusID) {
        this.statusID = statusID;
    }

    public String getSubDivisionID() {
        return subDivisionID;
    }

    public void setSubDivisionID(String subDivisionID) {
        this.subDivisionID = subDivisionID;
    }

    public String getDivisionID() {
        return divisionID;
    }

    public void setDivisionID(String divisionID) {
        this.divisionID = divisionID;
    }

    public Date getSuspendDate() {
        return suspendDate;
    }

    public void setSuspendDate(Date suspendDate) {
        this.suspendDate = suspendDate;
    }

    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }

    public String getGradeID() {
        return gradeID;
    }

    public void setGradeID(String gradeID) {
        this.gradeID = gradeID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMaritalStatusStr() {
        return maritalStatusStr;
    }

    public void setMaritalStatusStr(String maritalStatusStr) {
        this.maritalStatusStr = maritalStatusStr;
    }

    public String getNationalityStr() {
        return nationalityStr;
    }

    public void setNationalityStr(String nationalityStr) {
        this.nationalityStr = nationalityStr;
    }

    public String getStatusStr() {
        return statusStr;
    }

    public void setStatusStr(String statusStr) {
        this.statusStr = statusStr;
    }

    public String getSubDivisionStr() {
        return subDivisionStr;
    }

    public void setSubDivisionStr(String subDivisionStr) {
        this.subDivisionStr = subDivisionStr;
    }

    public String getDivisionStr() {
        return divisionStr;
    }

    public void setDivisionStr(String divisionStr) {
        this.divisionStr = divisionStr;
    }

    public String getGradeStr() {
        return gradeStr;
    }

    public void setGradeStr(String gradeStr) {
        this.gradeStr = gradeStr;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGenderStr() {
        return genderStr;
    }

    public void setGenderStr(String genderStr) {
        this.genderStr = genderStr;
    }

    public Set<Family> getFamilies() {
        return families;
    }

    public void setFamilies(Set<Family> families) {
        this.families = families;
    }
}