function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// open modal

document.getElementById('button').addEventListener('click' , function () {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.getElementById('button1').addEventListener('click' , function () {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.getElementById('button2').addEventListener('click' , function () {
    document.querySelector('.bg-modal').style.display = 'flex';
})

// document.getElementById('button3').addEventListener('click' , function () {
//     document.querySelector('.bg-modal').style.display = 'flex';
// })


document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
})


my_data = {
    "courses": [
    {
        "course_id": 5,
        "unique_id": 206984,
        "school": "KGSM",
        "title": "Managerial Accounting",
        "subject": "ACCT",
        "number": "431-0"
    },{
        "course_id": 20458,
        "unique_id": 208469,
        "school": "UC",
        "title": "Introduction to Financial Accounting",
        "subject": "ACCOUNT",
        "number": "201-DL"
    }, {
        "course_id": 20460,
        "unique_id": 208471,
        "school": "UC",
        "title": "Income Tax I",
        "subject": "ACCOUNT",
        "number": "208-DL"
    }, {
        "course_id": 20461,
        "unique_id": 208472,
        "school": "UC",
        "title": "Intermediate Accounting I",
        "subject": "ACCOUNT",
        "number": "210-DL"
    }, {
        "course_id": 20465,
        "unique_id": 208473,
        "school": "UC",
        "title": "Auditing I",
        "subject": "ACCOUNT",
        "number": "350-DL"
    }, {
        "course_id": 20467,
        "unique_id": 208474,
        "school": "UC",
        "title": "Topics in Accounting:",
        "subject": "ACCOUNT",
        "number": "390-DL"
    }, {
        "course_id": 3,
        "unique_id": 206983,
        "school": "KGSM",
        "title": "Accounting for Decision Making",
        "subject": "ACCT",
        "number": "430-0"
    },
    {
        "course_id": 16,
        "unique_id": 206987,
        "school": "KGSM",
        "title": "Financial Planning for Mergers & Acquisitions",
        "subject": "ACCT",
        "number": "444-5"
    }, {
        "course_id": 17,
        "unique_id": 206988,
        "school": "KGSM",
        "title": "Financial Reporting and Analysis",
        "subject": "ACCT",
        "number": "451-0"
    }, {
        "course_id": 39,
        "unique_id": 206990,
        "school": "KGSM",
        "title": "Empirical Research in Accounting II",
        "subject": "ACCT",
        "number": "540-2"
    }, {
        "course_id": 21863,
        "unique_id": 208468,
        "school": "UC",
        "title": "Visual Communication",
        "subject": "ADVT",
        "number": "380-CN"
    }, {
        "course_id": 1186,
        "unique_id": 210356,
        "school": "WCAS",
        "title": "First-Year Seminar",
        "subject": "AF_AM_ST",
        "number": "101-6"
    }, {
        "course_id": 20272,
        "unique_id": 210357,
        "school": "WCAS",
        "title": "Literatures of the Black World",
        "subject": "AF_AM_ST",
        "number": "211-0"
    }, {
        "course-id": 11616,
        "unique_id": 210358,
        "school": "WCAS",
        "title": "Introduction to African American History: Emancipation to Civil Rights Movement",
        "subject": "AF_AM_ST",
        "number": "212-2'"
    }, {
        "course-id": 1191,
        "unique_id": 210359,
        "school": "WCAS",
        "title": "Civil Rights and Black Liberation",
        "subject": "AF_AM_ST",
        "number": "220-0"
    }, {
        "course-id": 16646,
        "unique_id": 210360,
        "school": "WCAS",
        "title": "Politics of Black Popular Culture",
        "subject": "AF_AM_ST",
        "number": "327-0"
    }, 
    {
        "course-id": 12460,
        "unique_id": 210361,
        "school": "WCAS",
        "title": "Africans in Colonial Latin America",
        "subject": "AF_AM_ST",
        "number": "348-0"
    }, {
        "course-id": 16447,
        "unique_id": 210362,
        "school": "WCAS",
        "title": "Theorizing Blackness",
        "subject": "AF_AM_ST",
        "number": "350-0"
    }],
  }

  for (var key in my_data) {
    for (var i = 0; i < my_data[key].length; i++) {
            var courseName = my_data[key][i].title;
  			var sub = my_data[key][i].subject;
  			var num = my_data[key][i].number;
            var badge = document.createElement('div');
  			badge.className = 'badge';
  			badge.innerHTML =
    			'<p>' + sub + num + '</p>';
  			document.getElementById(key).appendChild(badge);
    }
}

// search course

document.getElementById('search-input').addEventListener('keyup', function (val) {
    var value = val.target.value
    console.log("Value", value)

    var data = searchCourse(value, my_data)
})

// search function
function searchCourse(value, data) {
    var filteredData = []

    for (var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].title.toLowerCase()

        if (name.includes(value)){
            filteredData.push(data[i])
        }
    }
}

