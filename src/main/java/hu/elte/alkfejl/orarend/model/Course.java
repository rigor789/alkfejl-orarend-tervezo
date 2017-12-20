package hu.elte.alkfejl.orarend.model;

import hu.elte.alkfejl.orarend.service.schedule.Interval;
import hu.elte.alkfejl.orarend.service.schedule.IntervalConverter;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="COURSES")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Course extends BaseEntity {

    @Column(nullable = false)
    private String name; //0

    @Column(nullable = false)
    private String subCode; //1

    @Column(nullable = false)
    @Convert(converter = IntervalConverter.class)
    private Interval interval; //2

    @Column(nullable = false)
    private String room; //3

    @Column(nullable = false)
    private String note; //5

    @Column(nullable = true)
    @Enumerated(EnumType.STRING)
    private CourseType type; //6

    @Column(nullable = false)
    private int courseCode; //7

    @Column(nullable = false)
    private String teacher; //11

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
        Practice, Presentation, Consultation, Unknown;

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
