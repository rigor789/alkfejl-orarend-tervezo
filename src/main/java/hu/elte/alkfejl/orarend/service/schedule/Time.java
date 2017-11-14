package hu.elte.alkfejl.orarend.service.schedule;

public class Time implements Comparable<Time> {
    private int hour;
    private int min;

    public Time(int h, int m) {
        //if(h < 8 || h > 18) {throw new IllegalArgumentException("Time/hour");}
        //if(m < 0 || m > 59) {throw new IllegalArgumentException("Time/minute");}
        hour = h;
        min = m;
    }


    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(hour).append(":");
        if(min<10) {sb.append("0");}
        sb.append(min);
        return sb.toString();
    }

    public Time add(int inp) {
        int hour=this.hour;
        int min = this.min+inp;
        while(min>59) {
            min-=60;
            hour++;
        }
        return new Time(hour,min);
    }

    @Override
    public int hashCode() {
        return hour*2 + min*3;
    }

    @Override
    public boolean equals(Object inp) {
        if(inp == null) {return false;}
        if(inp == this) {return true;}
        if(!(inp instanceof Time)) {return false;}
        Time t = (Time)inp;
        return t.hour == hour && t.min == min;
    }

    public int compareTo(Time inp) {
        if((60*inp.hour+inp.min)>(60*hour+min))
            return -1;
        if((60*inp.hour+inp.min)<(60*hour+min))
            return 1;
        return 0;
    }

    public int getHour() {return hour;}
    public int getMin() {return min;}


}