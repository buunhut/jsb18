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
  var tongSoDuong = 0;
  for (var i = 0; i < arraySoN.length; i++) {
    if (arraySoN[i] > 0) {
      tongSoDuong += arraySoN[i];
      document.getElementById("tongSoDuong").innerHTML = tongSoDuong;
    }
  }
}
// đến số dương
function demSoDuong() {
  var demSo = 0;
  for (var i = 0; i < arraySoN.length; i++) {
    if (arraySoN[i] > 0) {
      demSo++;
      document.getElementById("demSoDuong").innerHTML = demSo;
    }
  }
}
//tìm số nhỏ nhất
function timSoNhoNhat() {
  var sortN = arraySoN.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("soNhoNhat").innerHTML = sortN[0];
}
//tìm số dương lớn nhất
function timSoDuongNhoNhat() {
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
}
// tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
  // var arraySoChan = [];
  // var n = 0;
  for (var i = arraySoN.length; i >= 0; i--) {
    if (arraySoN[i] % 2 == 0) {
      document.getElementById("soChanCuoiCung").innerHTML = arraySoN[i];
      break;
    } else {
      document.getElementById("soChanCuoiCung").innerHTML =
        "-1 (Ko tìm thấy số chẵn)";
    }
  }
}
// đổi chỗ
function doiCho() {
  document.getElementById("doiCho").innerHTML = chiaOi(arraySoN.reverse());
}
// xắp sếp tăng dần
function sapXepTangDan() {
  var sapXepTangDan = arraySoN.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("sapXepTangDan").innerHTML = chiaOi(sapXepTangDan);
}
// tìm số nguyên tố đầu tiên
function soNguyenToDauTien() {
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
}
// đếm số nguyên
function demSoNguyen() {
  var demSoNguyen = 0;
  arraySoN.forEach(function (item, idex) {
    if (Math.floor(item) / item == 1) {
      demSoNguyen++;
    }
  });
  document.getElementById("demSoNguyen").innerHTML = demSoNguyen;
}
// so sánh số lượng số âm và số lượng số dương
function soSanh() {
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
}



