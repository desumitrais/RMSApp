package com.mitrais.rms.common.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
@MappedSuperclass
public class CommonEntity {

    @Column(name = "createdby")
    protected String createdBy;
    @Column(name = "createddate")
    protected Date   createdDate;
    @Column(name = "updatedby")
    protected String updatedBy;
    @Column(name = "updateddate")
    protected Date   updatedDate;
    @Column(name = "recordstatusid")
    protected int    recordStatusID;

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public int getRecordStatusID() {
        return recordStatusID;
    }

    public void setRecordStatusID(int recordStatusID) {
        this.recordStatusID = recordStatusID;
    }
}
