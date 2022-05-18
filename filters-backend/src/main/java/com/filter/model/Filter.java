package com.filter.model;

import javax.persistence.*;

@Entity
@Table(name = "filters")
public class Filter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "criteria1")
    private String criteria1;

    @Column(name = "criteria2")
    private String criteria2;

    @Column(name = "criteria3")
    private String criteria3;

    @Column(name = "criteria4")
    private String criteria4;

    @Column(name = "criteria5")
    private String criteria5;

    @Column(name = "criteria6")
    private String criteria6;

    public Filter() {

    }

    public Filter(String title, String criteria1,String criteria2,String criteria3,String criteria4,String criteria5,String criteria6) {
        this.title = title;
        this.criteria1 = criteria1;
        this.criteria2 = criteria2;
        this.criteria3 = criteria3;
        this.criteria4 = criteria4;
        this.criteria5 = criteria5;
        this.criteria6 = criteria6;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCriteria1() {
        return criteria1;
    }

    public void setCriteria1(String criteria1) {
        this.criteria1 = criteria1;
    }

    public String getCriteria2() {
        return criteria2;
    }

    public void setCriteria2(String criteria2) {
        this.criteria2 = criteria2;
    }

    public String getCriteria3() {
        return criteria3;
    }

    public void setCriteria3(String criteria3) {
        this.criteria3 = criteria3;
    }

    public String getCriteria4() {
        return criteria4;
    }

    public void setCriteria4(String criteria4) {
        this.criteria4 = criteria4;
    }

    public String getCriteria5() {
        return criteria5;
    }

    public void setCriteria5(String criteria5) {
        this.criteria5 = criteria5;
    }

    public String getCriteria6() {
        return criteria6;
    }

    public void setCriteria6(String criteria6) {
        this.criteria6 = criteria6;
    }

    

}
