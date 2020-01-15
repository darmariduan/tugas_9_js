function functionName() {
  var siswa = {
    nama : "Darma Riduan",
    umur : 24,
    Jurusan : "Sistem Informasi",
    Skill : {
      Design : "80%",
      Programming : "67%",

    }
  }
  for (var i in siswa){
    console.log(siswa[i]);
  }
}
functionName()
