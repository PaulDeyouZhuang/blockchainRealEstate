function open_file_option() {
document.getElementById("file").click();
}

function fileSelected() {
if (checkFilePass()) {
uploadFile();
}
}

function checkFilePass() {
var files = document.getElementById('file').files;

for (var i = 0; i < files.length; i++) {
if (files[i].type === 'image/jpeg'
|| files[i].type === 'image/png'
|| files[i].type === 'image/bmp'
|| files[i].type === 'image/gif'
|| files[i].type === 'image/tiff') {
if (files[i].size > 10 * 1024 * 1024) {
alert("單一圖片不可以超過 10 MB：" + files[i].name);
return false;
}
} else if (files[i].type === 'video/mp4'
|| files[i].type === 'video/avi'
|| files[i].type === 'video/3gpp'
|| files[i].type === 'video/x-matroska' // *.mkv
|| files[i].type === 'audio/ogg') {
if (files[i].size > 100 * 1024 * 1024) {
alert("單一影片不可以超過 100 MB：" + files[i].name);
return false;
}
} else {
alert(" 不支持格式：" + files[i].name);
return false;
}
}
return true;
}

function uploadFile() {
try {
var fd = new FormData(); 
var files = document.getElementById('file').files;
for(var i = 0; i < files.length; i++) fd.append("file", files[i]);
fd.append("id", document.getElementById('id').value);

var xhr = new XMLHttpRequest();
xhr.upload.addEventListener("progress", uploadProgress, false);
xhr.addEventListener("load", uploadComplete, false);
xhr.addEventListener("error", uploadFailed, false);
xhr.addEventListener("abort", uploadCanceled, false);
xhr.open('POST', 'UploadFile');
xhr.send(fd);
} catch (e) {
alert('My Error : ' + e);
}
}

function uploadProgress(evt) {
if (evt.lengthComputable) {
var percentComplete = Math.round(evt.loaded * 100 / evt.total);
document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
}
else {
document.getElementById('progressNumber').innerHTML = 'unable to compute';
}
}

function uploadComplete(evt) {
alert('伺服器回傳的訊息：' + evt.target.responseText);
}

function uploadFailed(evt) {
alert('發生錯誤');
}

function uploadCanceled(evt) {
alert('取消上傳');
}