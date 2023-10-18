var check_phone = /([0]{1})+([0-9]{9})$/
var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\?:\.[a-z]{2})?)$/;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_box = /^[A-Za-z0-9_]$/;
function checknull(txt){
    if(txt.value.length==0)
    return true;
else
return false;
}
function isInterger(txt){
    if((!isNaN(txt.value))&&(parseInt(txt.value)===Number(txt.value)))
    return true;
else
return false;
}
function StringMatch(txt,reg){
    return reg.test(txt.value);
}
function validform(f){
    if(checknull(f.họ_và_tên)){
        alert(f.họ_và_tên.name+" chưa được nhâp")
        f.họ_và_tên.focus();
        return;
    }
    if(checknull(f.email)){
        alert(f.email.name+" chưa được nhâp")
        f.email.focus();
        return;
    }
    if(!StringMatch(f.email,check_email)){
        alert(" email nhập sai định dạng");
        f.email.value="";
        f.email.focus();
        return;
    }
    if(checknull(f.Số_điện_thoại)){
        alert(f.Số_điện_thoại.name+" chưa được nhâp")
        f.Số_điện_thoại.focus();
        return;
    }
    if(!StringMatch(f.Số_điện_thoại,check_phone)){
        alert(" Số điện thoại nhập sai định dạng");
        f.Số_điện_thoại.value="";
        f.Số_điện_thoại.focus();
        return;
    }
    if(checknull(f.nội_dung)){
        alert(f.nội_dung.name+" chưa được nhâp")
        f.nội_dung.focus();
        return;
    }
    alert("Gửi yêu cầu thành công")
}