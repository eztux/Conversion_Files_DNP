const mongoose = require("mongoose");
const data_src_link = require(__dirname + '/models/data_src_link.js'),
    data_src = require(__dirname + '/models/data_src.js'),
    deriv_cd = require(__dirname + '/models/deriv_cd.js'),
    fd_group = require(__dirname + '/models/fd_group.js'),
    food_des = require(__dirname + '/models/food_des.js'),
    footnote = require(__dirname + '/models/footnote.js'),
    langdesc = require(__dirname + '/models/langdesc.js'),
    langual = require(__dirname + '/models/langual.js'),
    nut_data = require(__dirname + '/models/nut_data.js'),
    nutr_def = require(__dirname + '/models/nutr_def.js'),
    src_cd = require(__dirname + '/models/src_cd.js'),
    weight = require(__dirname + '/models/weight.js');

var fs = require('fs');
var csv = require('fast-csv');

var monConnect = require('./config.js');

mongoose.connect('mongodb://' + monConnect.username + ':' + monConnect.pass + '@ds055545.mlab.com:55545/dog-nutrition-plus');

// // data_src
var stream = fs.createReadStream(__dirname + '/conversion_files/data_src.txt');
var csvStream = csv({delimiter: '^', quote: '~'})
//     .on("data", function (data) {
//         var obj = {
//             DataSrc_ID: data[0],
//             Authors: data[1],
//             Title: data[2],
//             Year: data[3],
//             Journal: data[4],
//             Vol_City: data[5],
//             Issue_State: data[6],
//             Start_Page: data[7],
//             End_Page: data[8]
//         }

//         // var toSave = new data_src(obj);
//         // toSave.save(function(err){
//         //     if(err)
//         //     console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // data_src_link
// stream = fs.createReadStream(__dirname + '/conversion_files/datsrcln.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             Nutr_No: data[1],
//             DataSrc_ID: data[2]
//         }

//         // var toSave = new data_src_link(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // deriv_cd
// stream = fs.createReadStream(__dirname + '/conversion_files/deriv_cd.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             Deriv_Cd: data[0],
//             Deriv_Desc: data[1]
//         }

//         // var toSave = new deriv_cd(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // fd_group
// stream = fs.createReadStream(__dirname + '/conversion_files/fd_group.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             FdGrp_Cd: data[0],
//             FdGrp_Desc: data[1]
//         }

//         // var toSave = new fd_group(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // food_des
// stream = fs.createReadStream(__dirname + '/conversion_files/food_des.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             FdGrp_Cd: data[1],
//             Long_Desc: data[2],
//             Shrt_Desc: data[3],
//             ComName: data[4],
//             ManufacName: data[5],
//             Survey: data[6],
//             Ref_desc: data[7],
//             Refuse: data[8],
//             SciName: data[9],
//             N_Factor: data[10],
//             Pro_Factor: data[11],
//             Fat_Factor: data[12],
//             CHO_Factor: data[13]
//         }

//         // var toSave = new food_des(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // footnote -- PARSE ERROR HERE
// stream = fs.createReadStream(__dirname + '/conversion_files/footnote.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             Footnt_No: data[1],
//             Footnt_Typ: data[2],
//             Nutr_No: data[3],
//             Footnt_Txt: data[4]
//         }
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // langdesc
// stream = fs.createReadStream(__dirname + '/conversion_files/langdesc.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             Factor_Code: data[0], //Primary Key
//             Description: data[1]
//         }

        // var toSave = new langdesc(obj);
        // toSave.save(function (err) {
        //     if (err)
        //         console.log(err);
        // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // langual
// stream = fs.createReadStream(__dirname + '/conversion_files/langual.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             Factor_Code: data[1]
//         }

//         var toSave = new langual(obj);
//         toSave.save(function (err) {
//             if (err)
//                 console.log(err);
//         });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // nut_data -- QUERY ERROR HERE
// stream = fs.createReadStream(__dirname + '/conversion_files/nut_data.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             Nutr_No: data[1],
//             Nutr_Val: data[2],
//             Num_Data_Pts: data[3],
//             Std_Error: data[4],
//             Src_Cd: data[5],
//             Deriv_Cd: data[6],
//             Ref_NDB_No: data[7],
//             Add_Nutr_Mark: data[8],
//             Num_Studies: data[9],
//             Min: data[10],
//             Max: data[11],
//             DF: data[12],
//             Low_EB: data[13],
//             Up_EB: data[14],
//             Stat_cmt: data[15],
//             AddMod_Date: data[16],
//             CC: data[17]
//         }

//         var toSave = new nut_data(obj);
//         toSave.save(function (err) {
//             if (err)
//                 console.log(err);
//         });

//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // nutr_def
// stream = fs.createReadStream(__dirname + '/conversion_files/nutr_def.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             Nutr_No: data[0],
//             Units: data[1],
//             Tagname: data[2],
//             NutrDesc: data[3],
//             Num_Dec: data[4],
//             SR_Order: data[5]
//         }

//         // var toSave = new nutr_def(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // src_cd
// stream = fs.createReadStream(__dirname + '/conversion_files/src_cd.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             Src_Cd: data[0], //Primary Key
//             SrcCd_Desc: data[1]
//         }

//         var toSave = new src_cd(obj);
//         toSave.save(function (err) {
//             if (err)
//                 console.log(err);
//         });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);

// // weight -- GET PARSE ERROR HERE
// stream = fs.createReadStream(__dirname + '/conversion_files/weight.txt');
// csvStream = csv({ delimiter: '^', quote: '~' })
//     .on("data", function (data) {
//         var obj = {
//             NDB_No: data[0],
//             Seq: data[1],
//             Amount: data[2],
//             Msre_Desc: data[3],
//             Gm_Wgt: data[4],
//             Num_Data_Pts: data[5],
//             Std_Dev: data[6]
//         }

//         // var toSave = new weight(obj);
//         // toSave.save(function (err) {
//         //     if (err)
//         //         console.log(err);
//         // });
//     })
//     .on("end", function () {
//         console.log("done");
//     });

// stream.pipe(csvStream);
