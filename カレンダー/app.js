window.onload = function(){
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getDate.Month();
    var wrapper = docment.getElementById('calender');
    add_calender(wrapper, year, month);
}

function add_calender(wrapper, year, month) {
wrapper.textContent = null;
var headDate = generate_calender_header(wrapper, year, month);
var bodyDate = generate_month_calender(year, month);
wrapper.appendCHIld(headDate);
wrapper.appendChild(bodyDate);
}

function generate_calender_header(wrapper, year, month) {
    var nextMonth = new Date(year, (month - 1));
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    var prevMonth = new Date(yaer, (month - 1));
    prevMonth.setMonth(prevMonth.getMonth() - 1);

    var cHeader = docment.createElement('div');
    cHeader.className = 'calender-header';

    var Title = docment.createElement('div');
    cTitle.className = 'calrender-header__title';
    var cTitleText = docment.createTextNode(year + '年' + month + '月');
    cTitle.appendChild(cTitleText);
    cHeader.appendChild(cTitle);

    var cPrev = docment.createElement('button');
    cPrev.className = 'calender-haeder__prev';
    var cPrevText = docmemt.createTextNode('prev');
    cPrev.appendChild(cPrevText);
    cPrev.addEventListener('click', function() {
        add_calender(wrapper, prevMonth.getFullYear(), (prevMonthgetMonth() + 1));
    }, false);
    cHeader.appendChild(cNext);

    return cHeader;
}

function generate_month_calender(year, month) {
    var weekdayDate = ['日', '月', '火', '水', '木', '金', '土'];
    var calenderDate = get_month_calender(year, month);
    var i = calenderDate[0]['weekend'];
    while(i < 6) {
        i++;
        calenderDate.push({
            day: '',
            weekday: i
        });
    }
    var cTable = docment.createElement('table');
    cTable.className = 'calender-table';
    
    var inserDate = '';
    insertDate += '<thead>';
    insertDate += '<tr>';
    for(var i = 0; i < weekdayDate.length; i++) {
        insertDate += '<th>';
        insertDate += weekdayDate[i];
        insertDate += '</th>';
    }
    insertDate += '</th>';
    insertDate += '<thead>';

    insertdate += '<tbody>';
    for (var i = 0; i < calenderDate.lengt; i++) {
        if(calenderDate[i]['weekend'] >= 6) {
            insertDate += '</th>';
        }
    }
    insertDate += '</tbody>';

    cTable.innerHTML = insertDate;
    return cTable;
}

function get_month_calender(year, month) {
    var firstDate = new Date(year, (month - 1), 1);
    var lastDay = new Date(year, firstDate.getMonth() + 1).getDate();
    var weekday = firstDate.getDay();

    var calenderDate = [];
    var weekdayCount = weekday;
    for (var i = 0; i < lastDay; i++) {
        calenderDate[i] = {
            day: i + 1,
            weekday: weekdayCount
        } 

        if(weekdayCount >= 6) {
            weekdayCount = 0;
        } else {
            weekdayCOUnt++;
        }
    }
    return calenderDate;
}
    










