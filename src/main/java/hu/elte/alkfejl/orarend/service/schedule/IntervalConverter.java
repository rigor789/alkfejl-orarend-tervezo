package hu.elte.alkfejl.orarend.service.schedule;

import javax.persistence.AttributeConverter;

public class IntervalConverter implements AttributeConverter<Interval, String> {

    @Override
    public String convertToDatabaseColumn(Interval interval) {
        return interval.toString();
    }

    @Override
    public Interval convertToEntityAttribute(String s) {
        return new Interval(s, true);
    }
}
