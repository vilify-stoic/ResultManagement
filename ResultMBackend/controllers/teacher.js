const Student = require('../models/student');

var getUser="false";
console.log("post_logout/get_login");
const get_login = (req,res) => {
    getUser="false";
    console.log("post_logout/get_login");
    console.log(getUser);
    res.render("teacher/login");
};

const post_login = (req,res) => {
    if(req.body.password == "nagarro"){
        getUser="true";
        console.log("post_login");
        console.log(getUser);
        res.redirect("/teacher/option");
    }
    else{
        res.redirect("/teacher/teachererror");
    }
};


const get_option = (req,res) => {
    if(getUser=="true"){
        res.render("teacher/option");
    }
    res.redirect("/teacher/login");
};

const get_add = (req,res) => {
    if(getUser=="true"){
        res.render("teacher/add");
    }
    res.redirect("/teacher/login")
   
};

const get_viewall = async (req,res) => {
    if(getUser=="true"){
        console.log('get_viewall');
        const allStudents = await Student.find()
        res.render("teacher/viewall",{student : allStudents}) 
    }
    res.redirect("/teacher/login")
   
};

const get_edit = async(req,res) => {
    if(getUser=="true"){
        const id=req.params.id;
        console.log("get_edit");
        console.log(id);
        const user = await Student.findById(id);
        console.log(user);
        res.render("teacher/edit",{user : user})
    }
    res.redirect("/teacher/login")
    
};

const post_edit =  (req,res) => {
    if(getUser=="true"){
        const user =  Student.findByIdAndDelete(req.params.id,req.body)
        res.redirect("/teacher/viewall")
    }
    res.redirect("/teacher/login")
};

const get_delete = async(req,res) => {
    if(getUser=="true"){
        await Student.findByIdAndDelete(req.params.id)
        res.redirect("/teacher/viewall")
    }
    res.redirect("/teacher/login")
};

const post_add = async (req,res) => {
    if(getUser=="true"){
        const single = new Student({
            name : req.body.name,
            roll : req.body.roll,
            dob : req.body.dob,
            score : req.body.score
        })
        try{
            const newStudent = await single.save();
            res.redirect("/teacher/viewall");
        }
        catch{
            res.send("error")
        }
    }
    res.redirect("/teacher/login")
    
};

const post_logout = async(req,res) => {
    getUser="false";
    console.log("post_logout");
    console.log(getUser);
    res.redirect("/teacher/login")
};

module.exports={
    get_login,
    post_login,
    get_option,
    get_add,
    post_add,
    get_delete,
    get_edit,
    post_edit,
    get_viewall,
    post_logout,
    
}