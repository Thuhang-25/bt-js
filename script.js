const danhSachSanPham = [
    { ten: "Áo", gia: 200000, img: "ao.jpg" },
    { ten: "Váy", gia: 300000, img: "vay.jpg" },
    { ten: "Giày", gia: 500000, img: "giay.jpg" }
];

function doiSanPham() {
    let select = document.getElementById("productSelect").value;
    let img = document.getElementById("productImg");
    let name = document.getElementById("productName");
    let priceText = document.getElementById("productPriceText");

    if (select === "ao") {
        img.src = danhSachSanPham[0].img;
        name.innerText = danhSachSanPham[0].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[0].gia + " VNĐ";
    } else if (select === "quan") {
        img.src = danhSachSanPham[1].img;
        name.innerText = danhSachSanPham[1].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[1].gia + " VNĐ";
    } else if (select === "giay") {
        img.src = danhSachSanPham[2].img;
        name.innerText = danhSachSanPham[2].ten;
        priceText.innerText = "Giá: " + danhSachSanPham[2].gia + " VNĐ";
    }
}

function tinhTien() {
    let select = document.getElementById("productSelect").value;
    let soLuong = parseInt(document.getElementById("quantity").value) || 0;
    let gia = 0;

    if (select === "ao") {
        gia = danhSachSanPham[0].gia;
    } else if (select === "quan") {
        gia = danhSachSanPham[1].gia;
    } else if (select === "giay") {
        gia = danhSachSanPham[2].gia;
    }

    let tienHang = gia * soLuong;
    let giamGia = 0;

    if (tienHang >= 500000) {
        giamGia = tienHang * 0.1;
    } else {
        giamGia = 0;
    }

    let phaiTra = tienHang - giamGia;

    document.getElementById("tienHang").innerText = tienHang;
    document.getElementById("giamGia").innerText = giamGia;
    document.getElementById("phaiTra").innerText = phaiTra;
}

function doiMau(mau) {
    document.body.style.backgroundColor = mau;
}

function xemBangGia() {
    let container = document.getElementById("bangGiaList");
    let html = "<ol>";

    for (let i = 0; i < danhSachSanPham.length; i++) {
        html += "<li>" + danhSachSanPham[i].ten + " - " + danhSachSanPham[i].gia + " VNĐ</li>";
    }

    html += "</ol>";
    container.innerHTML = html;
}