create table employee (
    id character(36) NOT NULL,
    firstname character varying(40),
    lastname character varying(40) NOT NULL,
    genderid character(1),
    maritalStatusid character varying(3),
    nationalityid character varying(3),
    statusid character varying(3),
    subdivisionid character varying(3),
    divisionid character varying(3),
    suspendDate timestamp without time zone,
    hireDate timestamp without time zone,
    gradeID character varying(3),
    phone character varying(20),
    description character varying(20),
    dob timestamp without time zone,
    email character varying(100),
    createdby character(36),
    createddate timestamp without time zone,
    updatedby character(36),
    updateddate timestamp without time zone,
    recordstatusid smallint NOT NULL DEFAULT 1,
    CONSTRAINT pk_patient PRIMARY KEY (id)
);

create table lookup (
    id character(36) NOT NULL,
    lookupname character varying(50) NOT NULL,
    lookuptext character varying(250) NOT NULL,
    lookupvalue integer,
    lookupcode character varying(50),
    createdby character(36),
    createddate timestamp without time zone,
    updatedby character(36),
    updateddate timestamp without time zone,
    recordstatusid smallint NOT NULL DEFAULT 1,
    CONSTRAINT pk_lookup PRIMARY KEY (id)
);

create table family (
    id character(36) NOT NULL,
    employeeguid character(36) NOT NULL,
    firstname character varying(40),
    lastname character varying(40) NOT NULL,
    genderid character(1),
    dob timestamp without time zone,
    familytypeid character varying(3),
    createdby character(36),
    createddate timestamp without time zone,
    updatedby character(36),
    updateddate timestamp without time zone,
    recordstatusid smallint NOT NULL DEFAULT 1,
    CONSTRAINT pk_family PRIMARY KEY (id)
);

create table gradehistory (
    id character(36) NOT NULL,
    employeeguid character(36) NOT NULL,
    ds character varying(5),
    gradeID character varying(3),
    startDate timestamp without time zone,
    endDate timestamp without time zone,
    createdby character(36),
    createddate timestamp without time zone,
    updatedby character(36),
    updateddate timestamp without time zone,
    recordstatusid smallint NOT NULL DEFAULT 1,
    CONSTRAINT pk_gradehistory PRIMARY KEY (id)
);