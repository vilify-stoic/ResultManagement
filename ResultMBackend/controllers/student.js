const Student = require('../models/student');

const get_login = (req, res) => {
    res.render("student/login");
};


const post_login = async (req, res) => {
    const StudentRoll = req.body.roll;
    const StudentDOB = req.body.dob;
    const Sroll = await Student.findOne({roll : StudentRoll});
    if(!Sroll)
    {
        
        res.render("student/studenterror");
    }
    else 
    {
       // res.redirect("/teacher/login")
        res.render("student/view", { one : Sroll});
    }
    // else if(Sroll.dob===StudentDOB)
    // {
    //     res.render("student/studenterror");
    // }
};

module.exports={
    get_login,
    post_login
}