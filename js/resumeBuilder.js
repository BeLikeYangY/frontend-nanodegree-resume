/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Yang Yang",
    "role": "Javascript Learner",
    "contacts": {
        "mobile":"666-666-2333",
        "email": "example@gmail.com",
        "github": "belikeyang",
        "twitter": "@yang4fun",
        "location": "New York, NY"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume homepage",
    "skills": ["Game Design", "Java", "Photoshop", "Instructional Design"]
};

var work = {
    "jobs": [
        {
            "employer": "Beijing YiWan Information Technology",
            "title": "Marketing Intern",
            "location": "Hangzou, China",
            "dates": "January 2014 - July 2014",
            "description": "Responsible for developing and executing advertising and marketing strategies for user acquisition, customer reengagement and online traffic assessment of Chicha in Zhejiang region "+
                "Weekly in-market meetings and presentations aimed at increasing market share and campus awareness of the app and the user stickiness to the app"
        },
        {
            "employer": "Uber Hangzhou",
            "title": "Events Planning Intern",
            "location": "Hangzou, China",
            "dates": "June 2015 - September 2015",
            "description": "Organized and executed summer parties for college students in Zhejiang region increase the public awareness of the app and its services"+
                "Liaised with local medias and school administrators in event planning, stage designing, and volunteer management"+
                "UI/UX design"
        },
        {
            "employer": "Qianjiang Evening News",
            "title": "New Media Intern",
            "location": "Hangzou, China",
            "dates": "July 2016 - December 2016",
            "description": "Responsible for implementing and scheduling social content for Wechat of the Sports Departemt" +
                "Organized and executed offline activities" +
                "Executed advertising and marketing plan of the Sports Departemt"
        }
    ]
};

var education = {
    "schools": [
        { "name": "Zhejiang University",
            "dates": "2012 - 2016",
            "location": "Hangzou, China",
            "degree": "Bachelor of Arts",
            "majors": ["English Language & Literature"],
            "url": "www.zju.edu.cn"
        },
        { "name": "Teachers College, Columbia University",
            "dates": "2016 - 2018",
            "location": "New York, NY",
            "degree": "Master of Arts",
            "majors": ["Instructional Technology and Media"],
            "url": "tc.columbia.edu"
        }
    ]
    ,
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Nano-Degree of Front-End Developer",
            "dates": "Maybe November 2017",
            "url": "https://www.udacity.com"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Just Beat It!(Educational Music Game)",
            "dates": "April 2017 - May 2017",
            "description": "Just Beat It! is a CPR training ryhthm game which is envisioned as an extension of classical lecture-based and group-based resuscitation courses.",
            "images": ["images/game.png"],
            "url": "https://github.com/BeLikeYangY"
        },
        {
            "title": "Footage",
            "dates": "Feburary 2017 - May 2017",
            "description": "Map-based social networks, allow users to share their thoughts when visiting New York City",
            "images": ["images/footage.jpg"],
            "url": "https://github.com/BeLikeYangY/Final-Project-Version-1-"
        }
    ]
};


bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
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

        bio.skills.forEach(function(skill){
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }

    formattedContactInfo.forEach(function(contactInfo){
        $("#topContacts").append(contactInfo);
        $("#footerContacts").append(contactInfo);
    });
}

bio.display();

work.display = function() {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job){
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
}

work.display();

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

        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(project){

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            project.images.forEach(function(img){

                var formattedProjectImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {

        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(school){
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

             $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);

            school.majors.forEach(function(major){
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedSchoolMajor);
            });
        });

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(onlineCourse){
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            });
        }
    }
}

education.display();

$("#mapDiv").append(googleMap);



