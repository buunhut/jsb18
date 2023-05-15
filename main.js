// tạo hiện thị
function chiaOi(arrayKq) {
  var hienThi = "";
  arrayKq.forEach(function (item, index) {
    hienThi += item + "; ";
  });
  return hienThi;
}
// thêm số
var arraySoN = [];
function themSoN() {
  var soN = Number(document.getElementById("soN").value);
  arraySoN.push(soN);
  document.getElementById("daySoN").innerHTML = chiaOi(arraySoN);
}
// tính tổng các số dương
function tongCacSoDuong() {
  if (arraySoN.length > 0) {
    var tongSoDuong = 0;
    for (var i = 0; i < arraySoN.length; i++) {
      if (arraySoN[i] > 0) {
        tongSoDuong += arraySoN[i];
        document.getElementById("tongSoDuong").innerHTML = tongSoDuong;
      }
    }
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// đến số dương
function demSoDuong() {
  if (arraySoN.length > 0) {
    var demSo = 0;
    for (var i = 0; i < arraySoN.length; i++) {
      if (arraySoN[i] > 0) {
        demSo++;
        document.getElementById("demSoDuong").innerHTML = demSo;
      }
    }
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
//tìm số nhỏ nhất
function timSoNhoNhat() {
  if (arraySoN.length > 0) {
    var sortN = arraySoN.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("soNhoNhat").innerHTML = sortN[0];
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
//tìm số dương lớn nhất
function timSoDuongNhoNhat() {
  if (arraySoN.length > 0) {
    var sortN = arraySoN.sort(function (a, b) {
      return a - b;
    });
    ketQua = [];
    for (var i = 0; i < arraySoN.length; i++) {
      if (arraySoN[i] > 0) {
        ketQua.push(arraySoN[i]);
      }
    }
    document.getElementById("soDuongNhoNhat").innerHTML = ketQua[0];
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  if (arraySoN.length > 0) {
    for (var i = arraySoN.length; i >= 0; i--) {
      if (arraySoN[i] % 2 == 0) {
        document.getElementById("soChanCuoiCung").innerHTML = arraySoN[i];
        break;
      } else {
        document.getElementById("soChanCuoiCung").innerHTML =
          "-1 (Ko tìm thấy số chẵn)";
      }
    }
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// đổi chỗ
function doiCho() {
  if (arraySoN.length > 0) {
    document.getElementById("doiCho").innerHTML = chiaOi(arraySoN.reverse());
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// xắp sếp tăng dần
function sapXepTangDan() {
  if (arraySoN.length > 0) {
    var sapXepTangDan = arraySoN.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("sapXepTangDan").innerHTML = chiaOi(sapXepTangDan);
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// tìm số nguyên tố đầu tiên
function soNguyenToDauTien() {
  if (arraySoN.length > 0) {
    var soTimdc = [];
    var n = 1;
    //check xem có phải snt ko
    function check(z) {
      for (var i = 2; i < z; i++) {
        if (z % i == 0) {
          var check = "ko";
          break;
        }
      }
      if (check != "ko") {
        soTimdc.push(z);
      }
    }
    for (var x = 0; x <= arraySoN.length; x++) {
      if (arraySoN[x] >= 2) {
        check(arraySoN[x]);
        if (soTimdc.length <= 0) {
          document.getElementById("soNguyenToDauTien").innerHTML =
            "Trong dãy số không có số nguyên tố";
        } else {
          document.getElementById("soNguyenToDauTien").innerHTML = soTimdc;
          break;
        }
      }
    }
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// đếm số nguyên
function demSoNguyen() {
  if (arraySoN.length > 0) {
    var demSoNguyen = 0;
    arraySoN.forEach(function (item, idex) {
      if (Math.floor(item) / item == 1) {
        demSoNguyen++;
      }
    });
    document.getElementById("demSoNguyen").innerHTML = demSoNguyen;
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
// so sánh số lượng số âm và số lượng số dương
function soSanh() {
  if (arraySoN.length > 0) {
    var soAm = [];
    var soDuong = [];
    for (var i = 0; i < arraySoN.length; i++) {
      if (arraySoN[i] >= 0) {
        soDuong.push(arraySoN[i]);
      } else {
        soAm.push(arraySoN[i]);
      }
    }
    if (soDuong.length > soAm.length) {
      var ketQuaSoSanh = "Số lượng số dương nhiều hơn số lượng số âm";
    } else if (soDuong.length < soAm.length) {
      var ketQuaSoSanh = "Số lượng số âm nhiều hơn số lượng số dương";
    } else {
      var ketQuaSoSanh = "Số lượng số dương bằng số lượng số âm";
    }
    document.getElementById("soSanh").innerHTML = ketQuaSoSanh;
  } else {
    alert("Nhập số vào bạn ơi");
  }
}
