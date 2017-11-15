package hu.elte.alkfejl.orarend.service.schedule;

public class Interval implements Comparable<Interval> {

    private Day day;
    private Time starts;
    private int lng;

    public Interval(Day day, Time starts, int lng) {
        validateArguments(day,starts,lng);

        this.day = day;
        this.starts = starts;
        this.lng = lng;
    }


    public Interval(String s) {
        if(s.equals(""))
            throw new IllegalArgumentException("Interval String is empty");
        Day d;
        Time t;
        int begh;
        int begm;
        int endh;
        int endm;

        String[] splt = s.split( " ");
        if(splt[0].equals("Hétfo"))
            d = Day.MONDAY;
        else if(splt[0].equals("Kedd"))
            d = Day.TUESDAY;
        else if(splt[0].equals("Szerda"))
            d = Day.WEDNESDAY;
        else if(splt[0].equals("Csütörtök"))
            d = Day.THURSDAY;
        else if(splt[0].equals("Péntek"))
            d = Day.FRIDAY;
        else {
            d=null;
            throw new IllegalArgumentException("Interval day is corrupted");
        }

        String[] timeplt = splt[1].split("-"); //13:00 -- 14:00
        String[] beghsplt = timeplt[0].split(":"); //13 -- 00
        String[] endhsplt = timeplt[1].split(":"); //14 -- 00
        begh = Integer.parseInt(beghsplt[0]);
        begm = Integer.parseInt(beghsplt[1]);
        endh = Integer.parseInt(endhsplt[0]);
        endm = Integer.parseInt(endhsplt[1]);
        int l = (endh*60+endm)-(begh*60+begm);
        t = new Time(begh,begm);
        validateArguments(d,t,l);

        this.day = d;
        this.starts = t;
        this.lng = l;
    }

    private void validateArguments(Day day, Time starts, int lng) {
        Time t = new Time(starts.getHour(), starts.getMin());
        if (lng < 30 || lng > 240 || t == null) {
            throw new IllegalArgumentException("invalid interval length/time");
        }
        Time pt = t.add(lng);
        if (pt == null || day.toString() == "") {
            throw new IllegalArgumentException("invalid day");
        }
    }

    public Day getDay() {return day;}
    public Time getStartTime() {return starts;}
    public Time getEndTime() {return starts.add(lng);}
    public int getLength() {return lng;}

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(day.toString())
                .append(" ")
                .append(starts.toString())
                .append("-")
                .append(starts.add(lng).toString());
        return sb.toString();
    }

    @Override
    public int hashCode() {
        return dayToInt(day)*lng+starts.hashCode();
    }

    @Override
    public boolean equals(Object inp) {
        if(inp == null) {return false;}
        if(inp == this) {return true;}
        if(!(inp instanceof Interval)) {return false;}
        Interval iv = (Interval)inp;
        return day.equals(iv.day) && starts.equals(iv.starts) && iv.lng == lng;
    }

    private int dayToInt(Day inp) {
        switch(inp) {
            case MONDAY:
                return 1;
            case TUESDAY:
                return 2;
            case WEDNESDAY:
                return 3;
            case THURSDAY:
                return 4;
            case FRIDAY:
                return 5;
            default:
                return 0;
        }
    }

    public int compareTo(Interval inp) {
        if(dayToInt(inp.day) > dayToInt(day)) {return -1;}
        if(dayToInt(inp.day) == dayToInt(day)) {
            if(starts.compareTo(inp.starts) == -1) {return -1;}
            if(inp.starts.compareTo(starts) == 0) {
                if(lng < inp.lng) {return -1;}
                if(lng == inp.lng) {return 0;}
            }
        }
        return 1;
    }

    public boolean endsBefore(Interval inp) {
        if(dayToInt(day) < dayToInt(inp.day)) {return true;}
        if(dayToInt(day) > dayToInt(inp.day)) {return false;}
        else if(dayToInt(day) == dayToInt(inp.day)) {
            return getEndTime().compareTo(inp.starts) < 1;
        }
        return false;
    }

    public boolean overlapsWith(Interval inp) {
        if(dayToInt(inp.day) != dayToInt(day)) {return false;}
        if(getEndTime().compareTo(inp.getStartTime()) < 1) {return false;}
        if(getStartTime().compareTo(inp.getStartTime()) ==-1 &&
                getEndTime().compareTo(inp.getStartTime()) == 1) {return true;}
        if(getStartTime().compareTo(inp.getStartTime()) == 0) {return true;}
        if(inp.getEndTime().compareTo(getStartTime()) < 1) {return false;}
        if(inp.getStartTime().compareTo(getStartTime()) ==-1 &&
                inp.getEndTime().compareTo(getStartTime()) == 1) {return true;}
        return true;
    }

    public enum Day {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY;
        @Override
        public String toString() {
            switch(this) {
                case MONDAY:
                    return "Hétfo";
                case TUESDAY:
                    return "Kedd";
                case WEDNESDAY:
                    return "Szerda";
                case THURSDAY:
                    return "Csütörtök";
                case FRIDAY:
                    return "Péntek";
                default:
                    return "";
            }
        }
    };

}
