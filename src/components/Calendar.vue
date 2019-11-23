<template id='calendar'>
  <div class="calendar">
    <div class="header">
      <a class="arrow" @click="movePreviousMonth">&lsaquo;</a>
      <a class="arrow" @click="moveNextMonth">&rsaquo;</a>
    </div>
    <div class="week">
      <template v-for="week in weeks">
        <div
          class="day"
          :class="{ today: day.isToday, 'not-in-month': !day.inMonth }"
          v-for="day in week"
          :key="day.index"
        >
        <span class="title" @click="moveThisMonth" :key="week.index">{{ header.label }}</span>
        {{ day[dayKey]}}</div>
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const _weekdayLabels = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
const _monthLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const _today = new Date();
const _todayComps = {
  year: _today.getFullYear(),
  month: _today.getMonth() + 1,
  day: _today.getDate(),
}

export default {
  name: "Calendar",
  data() {
    return {
      month: _todayComps.month,
      year: _todayComps.year,
    };
  },
  props: {
  	dayKey: { type: String, default: 'label' },
  },
  computed: {
    monthIndex() {
      return this.month - 1;
    },
    isLeapYear() {
			return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
    },
    previousMonthComps() {
    	if (this.month === 1) return {
      	days: _daysInMonths[11],
      	month: 12,
        year: false,
      }
      return {
      	days: (this.month === 3 && this.isLeapYear) ? 29 : _daysInMonths[this.month - 2],
      	month: this.month - 1,
        year: this.year,
      };
    },
    nextMonthComps() {
    	if (this.month === 12) return {
      	days: _daysInMonths[0],
      	month: 1,
        year: this.year + 1,
      };
      return {
      	days: (this.month === 2 && this.isLeapYear) ? 29 : _daysInMonths[this.month],
      	month: this.month + 1,
        year: this.year,
      };
    },
    // State for calendar header (no dependencies yet...)
    months() {
      return _monthLabels.map((ml, i) => ({
        label: ml,
        label_1: ml.substring(0, 3),
      }));
    },
    allMonths() {
      return this.months
      
    },
    // State for weekday header (no dependencies yet...)
    weekdays() {
      return _weekdayLabels.map((wl, i) => ({
        label: wl,
        label_1: wl.substring(0, 1),
        label_2: wl.substring(0, 2),
        label_3: wl.substring(0, 3),
        number: i + 1,
      }));
    },

    dias() {
      return _weekdayLabels
    },
    // State for calendar header
    header() {
      const month = this.months[this.monthIndex];
      this.allMonths
      return {
        month: month,
        year: this.year.toString(),
        shortYear: this.year.toString().substring(2, 4),
        label: month.label
      }
    },
    // Returns number for first weekday (1-7), starting from Sunday
    firstWeekdayInMonth() {
      return new Date(this.year, this.monthIndex, 1).getDay() + 1;
    },
    // Returns number of days in the current month
    daysInMonth() {
      // Check for February in a leap year
      if (this.month === 2 && this.isLeapYear) return 29;
      // ...Just a normal month
      return _daysInMonths[this.monthIndex];
    },
    weeks() {
      const weeks = [];
      let previousMonth = true, thisMonth = false, nextMonth = false;
      let day = this.previousMonthComps.days - this.firstWeekdayInMonth + 2;
      let month = this.previousMonthComps.month;
      let year = this.previousMonthComps.year;
      // Cycle through each week of the month, up to 6 total
      for (let w = 1; w <= 6 && !nextMonth; w++) {
        // Cycle through each weekday
        const week = [];
        for (let d = 1; d <= 7; d++) {
          if (previousMonth && d >= this.firstWeekdayInMonth) {
            day = 1;
            month = this.month;
            year = this.year;
            previousMonth = false;
            thisMonth = true;
					}

          week.push ({
            label: (day && thisMonth) ? day.toString() + ' ' + _weekdayLabels[d-1] : '',
            day,
            weekday: d,
            week: w,
            month,
            year,
            date: new Date(year, month - 1, day),
            beforeMonth: previousMonth,
            afterMonth: nextMonth,
            inMonth: thisMonth,
            isToday: day === _todayComps.day && month === _todayComps.month && year === _todayComps.year,
            isFirstDay: thisMonth && day === 1,
            isLastDay: thisMonth && day === this.daysInMonth,
          });
        
          if (thisMonth && day >= this.daysInMonth) {
            thisMonth = false;
            nextMonth = true;
            day = 1;
            month = this.nextMonthComps.month;
            year = this.nextMonthComps.year;
          } else {
          	day++;
          }
        }
        weeks.push(week);
      }
      return weeks;
    },
  },
  methods: {
    moveThisMonth() {
      this.month = _todayComps.month;
      this.year = _todayComps.year;
    },
    moveNextMonth() {
      const { month, year } = this.nextMonthComps;
      this.month = month;
      this.year = year;
    },
    movePreviousMonth() {
      const { month, year } = this.previousMonthComps;
      this.month = month;
      this.year = year;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

calendar-layout {
  min-width: 400px;
}

.calendar {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  display: flex;
  justify-content: stretch;
  align-items: center;
  color: $clear;
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: $grey;
  background-color: #ff7a58;
}
.header .arrow {
  cursor: pointer;
  padding: 0 0.4em 0.2em 0.4em;
  font-size: 1.8rem;
  font-weight: 500;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-grow: 0;
}
.header .arrow:hover {
  color: #dcdcdc;
}
.header .title {
  cursor: pointer;
  flex-grow: 1;
  font-size: 1.2rem;
  text-align: center;
}
.header .title:hover {
  color: $grey;
}

.weekdays {
  display: flex;
}

.weekday {
  width: 14.2857%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0;
  color: $grey;
  border-width: 1px;
  border-style: solid;
  border-color: $grey;
  background-color: $grey-lite;
  cursor: default;
}

.week {
  display: flex;
  overflow: scroll;
}

.day {
  width: 14.2857%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3a3a3a;
  background-color: white;
  border: solid 1px #aaaaaa;
  cursor: default;
}

.today {
  font-weight: 500;
  color: white;
  background-color: #ff7a58;
}

.not-in-month {
  color: #cacaca;
  background-color: #fafafa;
}

.options {
  padding: 20px;
}
.options .option {
  margin-top: 5px;
}

</style>
