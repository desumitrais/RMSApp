package com.mitrais.rms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

import java.util.Date;

@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long   id;
    private String firstName;
    private String lastName;
    private String description;
    private String genderID;
    private Date   dob;
    private String maritalStatusID;
    private String nationalityID;
    private String statusID;
    private String subDivisionID;
    private String divisionID;
    private Date   suspendDate;
    private Date   hireDate;
    private String gradeID;
    private String email;

    public Employee() {
    }

    public Employee(String firstName, String lastName, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }

    public Employee(String firstName, String lastName, String description, String genderID, Date dob,
            String maritalStatusID, String nationalityID, String statusID, String subDivisionID, String divisionID,
            Date suspendDate, Date hireDate, String gradeID, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
}