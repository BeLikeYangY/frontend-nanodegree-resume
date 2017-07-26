/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Yang Yang",
    "role": "Javascript Learner",
    "contacts": {
        "email": "example@gmail.com",
        "github": "belikeyang",
        "twitter": "@yang4fun",
        "location": "New York, NY"
    },
    "picture": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume homepage",
    "skills": ["Game Design", "Java", "python", "Photoshop", "Instructional Design"]
};

var work = {
    "jobs": [
        {
            "employer": "TBeijing YiWan Information Technology",
            "title": "Marketing Intern",
            "location": "Hangzou, China",
            "datesWorked": "January 2014 - July 2014",
            "description": "Responsible for developing and executing advertising and marketing strategies for user acquisition, customer reengagement and online traffic assessment of Chicha in Zhejiang region "+
                "Weekly in-market meetings and presentations aimed at increasing market share and campus awareness of the app and the user stickiness to the app"
        },
        {
            "employer": "Uber Hangzhou",
            "title": "Events Planning Intern",
            "location": "Hangzou, China",
            "datesWorked": "June 2015 - September 2015",
            "description": "Organized and executed summer parties for college students in Zhejiang region increase the public awareness of the app and its services"+
                "Liaised with local medias and school administrators in event planning, stage designing, and volunteer management"+
                "UI/UX design"
        },
        {
            "employer": "Qianjiang Evening News",
            "title": "New Media Intern",
            "location": "Hangzou, China",
            "datesWorked": "July 2016 - December 2016",
            "description": "Responsible for implementing and scheduling social content for Wechat of the Sports Departemt" +
                "Organized and executed offline activities" +
                "Executed advertising and marketing plan of the Sports Departemt"
        }
    ]
};

var education = {
    "schools": [
        { "name": "Zhejiang University",
            "datesAttended": "2012 - 2016",
            "location": "Hangzou, China",
            "degree": "Bachelor of Arts",
            "major": "English Language & Literature",
            "url": "www.zju.edu.cn"
        },
        { "name": "Teachers College, Columbia University",
            "datesAttended": "2016 - 2018",
            "location": "New York, NY",
            "degree": "Master of Arts",
            "major": "Instructional Technology and Media",
            "url": "tc.columbia.edu"
        }
    ]
    ,
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Nano-Degree of Front-End Developer",
            "completed": "Maybe November 2017",
            "url": "https://www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Just Beat It!(Educational Music Game)",
            "datesWorked": "April 2017 - May 2017",
            "description": "Just Beat It! is a CPR training ryhthm game which is envisioned as an extension of classical lecture-based and group-based resuscitation courses.",
            "images": ["images/game.png"],
            "url": "https://github.com/BeLikeYangY"
        },
        {
            "title": "Footage",
            "datesWorked": "Feburary 2017 - May 2017",
            "description": "Map-based social networks, allow users to share their thoughts when visiting New York City",
            "images": ["images/footage.jpg"],
            "url": "https://github.com/BeLikeYangY/Final-Project-Version-1-"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

displayWork();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];

}

$('#main').append(internationalizeButton);

projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

$("#mapDiv").append(googleMap);



