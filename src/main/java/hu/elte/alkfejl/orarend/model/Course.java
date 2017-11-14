package hu.elte.alkfejl.orarend.model;

import hu.elte.alkfejl.orarend.service.schedule.Interval;
import hu.elte.alkfejl.orarend.service.schedule.IntervalConverter;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Entity
@Table(name="COURSES")
@Data
@EqualsAndHashCode(callSuper = true)
public class Course extends BaseEntity {

    @Column(nullable = false)
    private String name; //0

    @Column(nullable = false, unique = true)
    private String subCode; //1

    @Column(nullable = false)
    @Convert(converter = IntervalConverter.class)
    private Interval interval; //2

    @Column(nullable = false)
    private String room; //3

    @Column(nullable = false)
    private String note; //5

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CourseType type; //6

    @Column(nullable = false)
    private int courseCode; //7

    @Column(nullable = false)
    private String teacher; //11

    public Course(String inp) {
        String[] splt = inp.split("</td><td>");
        this.name = splt[0];
        this.subCode = splt[1];
        this.interval = new Interval(splt[2]);
        this.room = splt[3];
        this.note = splt[5];

        if(splt[6].equals("gyakorlat"))
            type = CourseType.Practice;
        else if(splt[6].equals("elõadás"))
            type = CourseType.Presentation;
        else if(splt[6].equals("konzultáció"))
            type = CourseType.Consultation;
        this.courseCode = Integer.parseInt(splt[7]);
        if(splt.length == 11)
            teacher = "UNKNOWN";
        else
            this.teacher = splt[11];

    }

    boolean overlapsWith(Course other) {
        return interval.overlapsWith(other.getInterval());
    }

    @Override
    public String toString() {
        return "Course{" +
                "name='" + name + '\'' +
                ", subCode='" + subCode + '\'' +
                ", interval=" + interval +
                ", room='" + room + '\'' +
                ", note='" + note + '\'' +
                ", type=" + type +
                ", courseCode=" + courseCode +
                ", teacher='" + teacher + '\'' +
                '}';
    }

    public enum CourseType {
        Practice, Presentation, Consultation;

        @Override
        public String toString() {
            switch(this) {
                case Practice:
                    return "Practice";
                case Presentation:
                    return "Presentation";
                case Consultation:
                    return "Consultation";
                default:
                    return "";
            }
        }
    }

}
