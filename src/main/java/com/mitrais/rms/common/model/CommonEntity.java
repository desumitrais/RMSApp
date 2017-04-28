package com.mitrais.rms.common.model;

import java.util.Date;

import javax.persistence.MappedSuperclass;

/**
 * Created by made_sudarsana on 4/28/2017.
 */
@MappedSuperclass
public class CommonEntity {

    protected String createdBy;
    protected Date   createdDate;
    protected String updatedBy;
    protected Date   updatedDate;
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
